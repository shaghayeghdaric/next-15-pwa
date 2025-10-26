export type ColorSchema = "primary" | "secondary" | "background" | "grey";

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

export const BACKGROUND = {
  default: "#000000",
};

export const palette = {
  mode: "dark" as const,
  primary: PRIMARY,
  secondary: SECONDARY,
  background: BACKGROUND,
  grey: GREY,
  text: { primary: "#FFFFFF", secondary: "#000000" },
};
