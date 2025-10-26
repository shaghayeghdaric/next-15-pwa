"use client";

import NextImage, { type ImageLoaderProps } from "next/image";

type SmartImageProps = {
  src: string;
  alt: string;

  // Fixed-size mode: pass BOTH width & height
  width?: number;
  height?: number;

  // Fluid mode: set fluid=true AND supply aspectWidth & aspectHeight
  fluid?: boolean;
  aspectWidth?: number;
  aspectHeight?: number;

  // Optional
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  className?: string;
  unoptimized?: boolean;
};

/**
 * A loader that simply appends `?w=<width>&q=<quality>` to whatever src you pass.
 * If src already starts with http(s), Next.js will fetch it from that domain (as long as
 * you’ve whitelisted that domain in next.config.js). If src is a “relative path,” it
 * just tacks on width/quality to that same relative path.
 */
function smartLoader({ src, width, quality }: ImageLoaderProps) {
  const q = quality ?? 75;

  if (src.startsWith("http://") || src.startsWith("https://")) {
    return `${src}?w=${width}&q=${q}`;
  }

  return `${src}?w=${width}&q=${q}`;
}

export default function Image({
  src,
  alt,
  width,
  height,
  fluid = false,
  aspectWidth,
  aspectHeight,
  placeholder = "blur",
  blurDataURL = "/images/placeholder.svg",
  className = "",
  unoptimized = false,
}: SmartImageProps) {
  // ——— “Fluid” mode: full-width 100% of parent, with a fixed aspect ratio ———
  if (fluid) {
    // We *must* have a numeric aspectWidth & aspectHeight in fluid mode
    if (typeof aspectWidth !== "number" || typeof aspectHeight !== "number") {
      console.error(
        "[SmartImage] When using fluid={true}, you must supply numeric aspectWidth & aspectHeight.",
      );
      return null;
    }

    // Calculate padding-bottom percentage for the aspect ratio,
    // e.g. if aspectWidth=16 and aspectHeight=9, ratioPct = (9/16)*100 = 56.25
    const ratioPct = (aspectHeight / aspectWidth) * 100;

    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: `${ratioPct}%`,
          overflow: "hidden",
          // backgroundColor: "#f0f0f0", // placeholder gray
        }}
      >
        <NextImage
          loader={(loaderProps) => smartLoader(loaderProps)}
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={className}
          unoptimized={unoptimized}
        />
      </div>
    );
  }

  // ——— “Fixed” mode: must pass BOTH width & height ———
  if (typeof width !== "number" || typeof height !== "number") {
    console.error(
      "[Image] You must either use fluid={true} with aspectWidth/aspectHeight, OR pass numeric width & height.",
    );
    return null;
  }

  return (
    <NextImage
      loader={(loaderProps) => smartLoader(loaderProps)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      className={className}
      unoptimized={unoptimized}
    />
  );
}
