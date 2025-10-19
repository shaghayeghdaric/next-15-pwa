import type { Components, Theme } from "@mui/material";
import { COLOR_KEYS } from "./button";

declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    xsmall: true;
  }

  interface IconButtonPropsColorOverrides {
    special: true;
    "special-2": true;
  }
}
// ----------------------------------------------------------------------

export const MuiIconButton: Components<Theme>["MuiIconButton"] = {
  defaultProps: { size: "large" },
  styleOverrides: {
    root: {
      sizeLarge: { height: "48px", width: "48px", padding: "12px" },
      sizeMedium: { height: "40px", width: "40px", padding: "8px" },
      sizeSmall: { height: "32px", width: "32px", padding: "8px" },
      sizeXSmall: { height: "24px", width: "24px", padding: "4px" },
      variants: COLOR_KEYS.map((color) => ({
        props: { color },
        style: {
          backgroundColor: `var(--mui-palette-${color}-main)`,
          color: `var(--mui-palette-${color}-contrastText)`,
          "svg path, svg circle": { stroke: `var(--mui-palette-${color}-contrastText)` },
          "&:hover": { backgroundColor: `var(--mui-palette-${color}-dark)` },
        },
      })),
    },
  },
};
