"use client";

import type { PropsWithChildren } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { components } from "./components";
import { palette } from "./palette";
import typography from "./typography";

interface ThemeProviderProps extends PropsWithChildren {
  direction?: "ltr" | "rtl";
}

export function ThemeProvider({ children, direction = "ltr" }: ThemeProviderProps) {
  const theme = createTheme({
    cssVariables: true,
    direction, // MUI has built-in RTL support
    palette,
    typography,
    components,
    shape: { borderRadius: 4 },
    spacing: 4,
  });

  return (
    <AppRouterCacheProvider>
      <MUIThemeProvider theme={theme} defaultMode="light">
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </AppRouterCacheProvider>
  );
}
