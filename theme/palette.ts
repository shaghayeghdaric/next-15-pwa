export type ColorSchema = "primary" | "secondary" | "tertiary" | "background" | "grey";

declare module "@mui/material/styles" {
  interface Palette {
    gradients: {
      primary: string;
      secondary: string;
      tertiary: string;
      blue: string;
      blueVertical: string;
    };
  }

  interface PaletteOptions {
    gradients?: {
      primary?: string;
      secondary?: string;
      tertiary?: string;
      blue?: string;
      blueVertical?: string;
    };
  }
}

export const GREY = {
  900: "#2E384D",
  800: "#4D5E80",
  700: "#6F7D99",
  600: "#929CB2",
  500: "#B4BCCA",
  400: "#C5CBD7",
  300: "#D7DBE3",
  200: "#E8EAF0",
  100: "#F9FAFC",
  contrastText: "#ffffff",
};

export const PRIMARY = {
  light: "#00A5E8",
  dark: "#000000",
  main: "#50ED8D",
};

export const SECONDARY = {
  light: "#ABB5BE",
  main: "#95BACA",
  dark: "#54595E",
};
export const TERTIARY = {
  light: "#FFD966",
  main: "#FFAE00",
  dark: "#CC8A00",
  contrastText: "#000000",
};

export const BACKGROUND = {
  default: "#000000",
};

export const GRADIENTS = {
  primary: "linear-gradient(135deg, #50ED8D, #00A5E8)",
  secondary: "linear-gradient(135deg, #95BACA, #54595E)",
  tertiary: "linear-gradient(135deg, #FFAE00, #FFD966)",
  blue: "linear-gradient(135deg, #00A5E8, #0088CC)",
  blueVertical: "linear-gradient(180deg, #00A5E8, #0088CC)",
};

export const palette = {
  mode: "dark" as const,
  primary: PRIMARY,
  secondary: SECONDARY,
  tertiary: TERTIARY,
  background: BACKGROUND,
  grey: GREY,
  gradients: GRADIENTS,
  text: { primary: "#FFFFFF", secondary: "#000000" },
};
