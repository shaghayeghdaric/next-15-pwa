"use client";

import type { PropsWithChildren } from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { components } from "./components";
import { palette } from "./palette";
import typography from "./typography";

export function ThemeProvider({ children }: PropsWithChildren) {
  const theme = createTheme({
    cssVariables: true,
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
