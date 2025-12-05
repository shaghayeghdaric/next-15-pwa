// Icon.tsx
"use client";

import type { FC, CSSProperties } from "react";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { SvgIcon } from "@mui/material";
import { iconMap } from "./generated";

export type IconNames = keyof typeof iconMap;

interface IconProps {
  name: IconNames;
  className?: string;
  size?: number;
  fillColor?: CSSProperties["color"];
  strokeColor?: CSSProperties["color"];
}

const DynamicIcons: Record<IconNames, ReturnType<typeof dynamic>> = Object.fromEntries(
  Object.entries(iconMap).map(([k, loader]) => [
    k,
    dynamic(loader as any, {
      ssr: false,
      loading: () => null,
    }),
  ])
) as any;

export const Icon: FC<IconProps> = ({ name, className, size = 24, fillColor, strokeColor }) => {
  const IconComponent = DynamicIcons[name];

  useEffect(() => {
    if (IconComponent) {
      iconMap[name]();
    }
  }, [name, IconComponent]);

  if (!IconComponent) {
    // biome-ignore lint/suspicious/noConsole: <explanation>
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <SvgIcon
      className={className}
      sx={{
        fontSize: size,
        fill: "transparent",
        path: { fill: fillColor, stroke: strokeColor },
      }}
    >
      <IconComponent />
    </SvgIcon>
  );
};
