import { inputBaseClasses } from "@mui/material";
import type { Theme, Components } from "@mui/material/styles";

// ----------------------------------------------------------------------

// 1) MuiTextField: just sets defaultProps.variant = "outlined"
export const MuiTextField: Components<Theme>["MuiTextField"] = {
  defaultProps: {
    variant: "outlined",
  },
};

// 2) MuiFormLabel: overrides the label (“<FormLabel>”) styles
export const MuiFormLabel: Components<Theme>["MuiFormLabel"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      marginRight: theme.spacing(3),
      marginBottom: "10px !important",
      transform: "none !important",
      // typography h6-regular remains JS-based
      ...theme.typography["h6-regular"],
      color: "var(--mui-palette-grey-800)",

      // required asterisk in the label
      ".MuiFormLabel-asterisk": {
        color: "var(--mui-palette-error-main)",
      },

      // disabled label color
      "&.Mui-disabled": {
        color: "var(--mui-palette-grey-500)",
      },
    }),
  },
};

// 3) MuiInputBase: overrides the root & input slot for all InputBase-derived components
export const MuiInputBase: Components<Theme>["MuiInputBase"] = {
  styleOverrides: {
    root: {
      backgroundColor: "var(--mui-palette-common-white)",
      marginTop: "0 !important",
      borderRadius: "10px !important",

      textarea: { padding: "0 !important" },

      // hover → change the outline border to primary.dark
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--mui-palette-primary-dark) !important",
        },
      },

      // readOnly state
      [`&.${inputBaseClasses.readOnly}`]: {
        backgroundColor: "var(--mui-palette-grey-100)",
        pointerEvents: "none",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--mui-palette-grey-300) !important",
        },
      },

      // disabled state
      [`&.${inputBaseClasses.disabled}`]: {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--mui-palette-grey-200) !important",
        },
      },

      // focused (keyboard or programmatic) → outline to primary.main
      [`&.${inputBaseClasses.focused}`]: {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--mui-palette-primary-main) !important",
        },
      },
    },
    input: ({ theme }) => ({
      // typography for input text
      ...theme.typography["h6-regular"],
      color: "var(--mui-palette-grey-800)",
      padding: "14px 12px !important",

      // disabled input text color (also override autofill)
      "&.Mui-disabled": {
        color: "var(--mui-palette-grey-500)",
        WebkitTextFillColor: "var(--mui-palette-grey-500)",
      },

      // placeholder styling
      "&::placeholder": {
        ...theme.typography["h6-regular"],
        opacity: 1,
        color: "var(--mui-palette-grey-500)",
      },
    }),
  },
};

// 4) MuiOutlinedInput: overrides just the notchedOutline slot
export const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: {
      paddingLeft: "14px !important",
    },
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "var(--mui-palette-grey-300)",
    },
  },
};

// 5) MuiFormHelperText: overrides helper text under the field
export const MuiFormHelperText: Components<Theme>["MuiFormHelperText"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography["p2-regular"],
      color: "var(--mui-palette-grey-700)",
      marginTop: "4px",
      marginLeft: "12px",
    }),
  },
};
