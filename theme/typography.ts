import type { CSSProperties } from "react";
import { toNumber } from "../utils/number";
import { primaryFont } from "./localFonts";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    // bold
    "h1-bold": CSSProperties;
    "h2-bold": CSSProperties;
    "h3-bold": CSSProperties;
    "h4-bold": CSSProperties;
    "h5-bold": CSSProperties;
    "h6-bold": CSSProperties;
    "p1-bold": CSSProperties;
    "p2-bold": CSSProperties;
    // medium
    "h1-medium": CSSProperties;
    "h2-medium": CSSProperties;
    "h3-medium": CSSProperties;
    "h4-medium": CSSProperties;
    "h5-medium": CSSProperties;
    "h6-medium": CSSProperties;
    "p1-medium": CSSProperties;
    "p2-medium": CSSProperties;
    // regular
    "h1-regular": CSSProperties;
    "h2-regular": CSSProperties;
    "h3-regular": CSSProperties;
    "h4-regular": CSSProperties;
    "h5-regular": CSSProperties;
    "h6-regular": CSSProperties;
    "p1-regular": CSSProperties;
    "p2-regular": CSSProperties;
    // light
    "h1-light": CSSProperties;
    "h2-light": CSSProperties;
    "h3-light": CSSProperties;
    "h4-light": CSSProperties;
    "h5-light": CSSProperties;
    "h6-light": CSSProperties;
    "p1-light": CSSProperties;
    "p2-light": CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    // bold
    "h1-bold"?: CSSProperties;
    "h2-bold"?: CSSProperties;
    "h3-bold"?: CSSProperties;
    "h4-bold"?: CSSProperties;
    "h5-bold"?: CSSProperties;
    "h6-bold"?: CSSProperties;
    "p1-bold"?: CSSProperties;
    "p2-bold"?: CSSProperties;
    // medium
    "h1-medium"?: CSSProperties;
    "h2-medium"?: CSSProperties;
    "h3-medium"?: CSSProperties;
    "h4-medium"?: CSSProperties;
    "h5-medium"?: CSSProperties;
    "h6-medium"?: CSSProperties;
    "p1-medium"?: CSSProperties;
    "p2-medium"?: CSSProperties;
    // regular
    "h1-regular"?: CSSProperties;
    "h2-regular"?: CSSProperties;
    "h3-regular"?: CSSProperties;
    "h4-regular"?: CSSProperties;
    "h5-regular"?: CSSProperties;
    "h6-regular"?: CSSProperties;
    "p1-regular"?: CSSProperties;
    "p2-regular"?: CSSProperties;
    // light
    "h1-light"?: CSSProperties;
    "h2-light"?: CSSProperties;
    "h3-light"?: CSSProperties;
    "h4-light"?: CSSProperties;
    "h5-light"?: CSSProperties;
    "h6-light"?: CSSProperties;
    "p1-light"?: CSSProperties;
    "p2-light"?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    caption: false;
    overline: false;
    body1: false;
    body2: false;
    button: false;

    // bold
    "h1-bold": true;
    "h2-bold": true;
    "h3-bold": true;
    "h4-bold": true;
    "h5-bold": true;
    "h6-bold": true;
    "p1-bold": true;
    "p2-bold": true;
    // medium
    "h1-medium": true;
    "h2-medium": true;
    "h3-medium": true;
    "h4-medium": true;
    "h5-medium": true;
    "h6-medium": true;
    "p1-medium": true;
    "p2-medium": true;
    // regular
    "h1-regular": true;
    "h2-regular": true;
    "h3-regular": true;
    "h4-regular": true;
    "h5-regular": true;
    "h6-regular": true;
    "p1-regular": true;
    "p2-regular": true;
    // light
    "h1-light": true;
    "h2-light": true;
    "h3-light": true;
    "h4-light": true;
    "h5-light": true;
    "h6-light": true;
    "p1-light": true;
    "p2-light": true;
  }
}

export type Variant =
  // bold
  | "h1-bold"
  | "h2-bold"
  | "h3-bold"
  | "h4-bold"
  | "h5-bold"
  | "h6-bold"
  | "p1-bold"
  | "p2-bold"
  // medium
  | "h1-medium"
  | "h2-medium"
  | "h3-medium"
  | "h4-medium"
  | "h5-medium"
  | "h6-medium"
  | "p1-medium"
  | "p2-medium"
  // regular
  | "h1-regular"
  | "h2-regular"
  | "h3-regular"
  | "h4-regular"
  | "h5-regular"
  | "h6-regular"
  | "p1-regular"
  | "p2-regular"
  // light
  | "h1-light"
  | "h2-light"
  | "h3-light"
  | "h4-light"
  | "h5-light"
  | "h6-light"
  | "p1-light"
  | "p2-light";

const pxToRem = (value: number): string => `${value / 16}rem`;

type FontWeight = 300 | 400 | 500 | 700;
const weights: Record<FontWeight, string> = {
  300: "light",
  400: "regular",
  500: "medium",
  700: "bold",
};

interface Style {
  fontWeight: FontWeight;
  fontSize: string;
}

const fontVariant = (name: string, fontSize: number): Record<string, Style> =>
  Object.entries(weights).reduce<Record<string, Style>>((accumulator, [weight, label]) => {
    accumulator[`${name}-${label}`] = {
      fontWeight: toNumber(weight) as FontWeight,
      fontSize: pxToRem(fontSize),
    };
    return accumulator;
  }, {});

const typography = {
  fontFamily: primaryFont.style.fontFamily,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,

  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  subtitle1: undefined,
  subtitle2: undefined,
  overline: undefined,

  ...fontVariant("h1", 26),
  ...fontVariant("h2", 24),
  ...fontVariant("h3", 20),
  ...fontVariant("h4", 18),
  ...fontVariant("h5", 16),
  ...fontVariant("h6", 14),
  ...fontVariant("p1", 12),
  ...fontVariant("p2", 10),
} as const;

export default typography;
