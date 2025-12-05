import fs from "fs";
import path from "path";
import { promisify } from "util";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

// Use lowercase paths to match the repository structure (components/icons)
const ICONS_DIR = path.join(process.cwd(), "components", "icons", "svgs");
const OUTPUT_DIR = path.join(process.cwd(), "components", "icons", "generated");

const iconStyles = await fs.promises.readdir(ICONS_DIR);
function toPascalCase(str: string): string {
  return str.replace(/(?:^|[-_\s])(\w)/g, (_, c) => c.toUpperCase()).replace(/[-_\s]/g, "");
}

function generateIconComponent(name: string, svgContent: string, style: string): string {
  const componentName = `${toPascalCase(name)}${style}`;

  // Extract attributes from the original <svg> to preserve sizing and viewBox
  const openTagMatch = svgContent.match(/<svg([^>]*)>/i);
  const attrs = openTagMatch?.[1] ?? "";
  const viewBoxMatch = attrs.match(/viewBox="([^"]+)"/i);
  const widthMatch = attrs.match(/width="([^"]+)"/i);
  const heightMatch = attrs.match(/height="([^"]+)"/i);
  const preserveMatch = attrs.match(/preserveAspectRatio="([^"]+)"/i);

  // Determine viewBox. If missing, synthesize from explicit width/height if available.
  let viewBox = viewBoxMatch?.[1] ?? "";
  if (!viewBox) {
    const w = widthMatch?.[1];
    const h = heightMatch?.[1];
    if (w && h) {
      const numW = parseFloat(String(w));
      const numH = parseFloat(String(h));
      if (!Number.isNaN(numW) && !Number.isNaN(numH)) {
        viewBox = `0 0 ${numW} ${numH}`;
      }
    }
  }
  if (!viewBox) {
    // Final fallback if nothing was found
    viewBox = "0 0 16 16";
  }

  // For scalable icons, don't set fixed width/height; let CSS control it.
  // If the original had preserveAspectRatio, pass it through.
  const preserveAspectRatio = preserveMatch?.[1];

  // Normalize attribute names inside the SVG content
  const innerSvg = svgContent
    .replace(/<svg[^>]*>/i, "")
    .replace(/<\/svg>/i, "")
    .replace(/stroke-width/g, "strokeWidth")
    .replace(/stroke-linecap/g, "strokeLinecap")
    .replace(/stroke-linejoin/g, "strokeLinejoin")
    .replace(/fill-rule/g, "fillRule")
    .replace(/clip-rule/g, "clipRule")
    .replace(/xlink:href/g, "xlinkHref");

  return `import type { FC } from "react";

export const ${componentName}: FC = () => {
  return (
    <svg
      viewBox="${viewBox}"
      xmlns="http://www.w3.org/2000/svg"
      ${preserveAspectRatio ? `preserveAspectRatio="${preserveAspectRatio}"` : ""}
      role="img"
      focusable="false"
    >
      ${innerSvg}
    </svg>
  );
};
`;
}

function generateIndexFile(icons: string[]): string {
  return `// This file is auto-generated. Do not edit manually.
export const iconMap = {
${icons.map((icon) => `${icon}: () => import("./${icon}").then((mod) => mod.${icon}),`).join("\n")}
};`;
}

async function processDirectory(style: string): Promise<string[]> {
  const styleDir = path.join(ICONS_DIR, style);
  const files = await fs.promises.readdir(styleDir);
  const generatedIcons: string[] = [];

  for (const file of files) {
    if (file.endsWith(".svg")) {
      const svgPath = path.join(styleDir, file);
      const svgContent = await readFile(svgPath, "utf-8");
      const name = path.basename(file, ".svg");
      const componentName = `${toPascalCase(name)}${style}`;
      const componentContent = generateIconComponent(name, svgContent, style);

      const outputPath = path.join(OUTPUT_DIR, `${componentName}.tsx`);
      await writeFile(outputPath, componentContent);
      generatedIcons.push(componentName);
      // biome-ignore lint/suspicious/noConsole: log generated file paths
      console.log(`Created: ${outputPath}`);
    }
  }

  return generatedIcons;
}

async function main() {
  try {
    // Create output directory
    await mkdir(OUTPUT_DIR, { recursive: true });

    // Process each style directory and collect all icon names
    const allIcons: string[] = [];
    for (const style of iconStyles) {
      const icons = await processDirectory(style);
      allIcons.push(...icons);
    }

    // Generate index file
    const indexContent = generateIndexFile(allIcons);
    const indexPath = path.join(process.cwd(), "components", "icons", "generated", "index.ts");
    await writeFile(indexPath, indexContent);
    // biome-ignore lint/suspicious/noConsole: log generated index path
    console.log(`Created: ${indexPath}`);

    // biome-ignore lint/suspicious/noConsole: log completion status
    console.log("Icon conversion completed successfully!");
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: log error for troubleshooting
    console.error("Error converting icons:", error);
    process.exit(1);
  }
}

main();
