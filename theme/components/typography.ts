import type { Components, Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export const MuiTypography: Components<Theme>["MuiTypography"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
    }),
  },
};
