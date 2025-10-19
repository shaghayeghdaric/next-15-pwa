import { MuiButton } from "./button";
import { MuiTextField, MuiFormLabel, MuiFormHelperText, MuiInputBase, MuiOutlinedInput } from "./input";
import type { CssVarsThemeOptions } from "@mui/material";
import { MuiIconButton } from "./icon-button";
import { MuiTabs, MuiTab } from "./tab";
import { MuiFormControlLabel } from "./form-control-label";
import { MuiTypography } from "./typography";

export const components: CssVarsThemeOptions["components"] = {
  MuiButton: MuiButton,
  MuiTextField: MuiTextField,
  MuiFormLabel: MuiFormLabel,
  MuiFormHelperText: MuiFormHelperText,
  MuiInputBase: MuiInputBase,
  MuiOutlinedInput: MuiOutlinedInput,
  MuiIconButton: MuiIconButton,
  MuiTabs: MuiTabs,
  MuiTab: MuiTab,
  MuiFormControlLabel: MuiFormControlLabel,
  MuiTypography: MuiTypography,
};
