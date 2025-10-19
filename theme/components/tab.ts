import type { Theme, Components } from "@mui/material/styles";
import { tabClasses } from "@mui/material/Tab";

// ----------------------------------------------------------------------

// 1) MuiTabs: override the Tabs component’s indicator & scrollButtons
export const MuiTabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    root: {
      borderRadius: "12px",
      boxShadow: "0px 2px 16px 0px rgba(6, 51, 54, 0.10)",
      backgroundColor: "white",
      height: "40px",
      minHeight: "40px",
    },
    indicator: { display: "none" },
    list: { padding: "4px" },
  },
};

// 2) MuiTab: override each Tab’s root slot
export const MuiTab: Components<Theme>["MuiTab"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: "8px",
      padding: "12px 16px",
      backgroundColor: "white",
      height: "32px",
      minHeight: "32px",

      [`&.${tabClasses.selected}`]: {
        color: "white",
        ...theme.typography["p1-medium"],
        backgroundColor: "var(--mui-palette-primary-main)",
      },
      // unselected tabs get secondary text color
      [`&:not(.${tabClasses.selected})`]: {
        color: "var(--mui-palette-grey-800)",
        ...theme.typography["p1-light"],
      },
    }),
  },
};
