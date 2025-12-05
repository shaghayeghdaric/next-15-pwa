// @mui
import type { Breakpoint } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

// ----------------------------------------------------------------------

type ReturnType = boolean;

type Query = "up" | "down" | "between" | "only";

type Value = Breakpoint | number;

export function useResponsive(query: Query, start?: Value, end?: Value): ReturnType {
  const theme = useTheme();

  // Direct media query strings instead of using theme.breakpoints methods
  let mediaQuery = "";

  if (query === "up" && start) {
    const breakpointValue = typeof start === "string" ? theme.breakpoints.values[start] : start;
    mediaQuery = `(min-width:${breakpointValue}px)`;
  } else if (query === "down" && start) {
    const breakpointValue = typeof start === "string" ? theme.breakpoints.values[start] : start;
    mediaQuery = `(max-width:${breakpointValue - 0.05}px)`;
  } else if (query === "between" && start && end) {
    const startValue = typeof start === "string" ? theme.breakpoints.values[start] : start;
    const endValue = typeof end === "string" ? theme.breakpoints.values[end] : end;
    mediaQuery = `(min-width:${startValue}px) and (max-width:${endValue - 0.05}px)`;
  } else if (query === "only" && start && typeof start === "string") {
    const breakpointValue = theme.breakpoints.values[start];
    const keys = Object.keys(theme.breakpoints.values) as Breakpoint[];
    const index = keys.indexOf(start);
    if (index === keys.length - 1) {
      mediaQuery = `(min-width:${breakpointValue}px)`;
    } else {
      const nextValue = theme.breakpoints.values[keys[index + 1]];
      mediaQuery = `(min-width:${breakpointValue}px) and (max-width:${nextValue - 0.05}px)`;
    }
  }

  return useMediaQuery(mediaQuery);
}

// ----------------------------------------------------------------------

export function useWidth(): Breakpoint {
  const theme = useTheme();
  const keys = (Object.keys(theme.breakpoints.values) as Breakpoint[]).reverse();

  for (const key of keys) {
    const breakpointValue = theme.breakpoints.values[key];
    const matches = useMediaQuery(`(min-width:${breakpointValue}px)`);
    if (matches) {
      return key;
    }
  }

  return "xs";
}

export const useIsMobile = () => useResponsive("down", "md");
