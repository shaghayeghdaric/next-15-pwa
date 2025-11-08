"use client";

import type { DialogProps } from "@mui/material";
import { Dialog } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

const CustomDialog: FC<PropsWithChildren<DialogProps>> = ({ children, ...props }) => {
  return (
    <Dialog
      data-testid="dialog"
      disableScrollLock
      sx={(theme) => ({
        "& .MuiDialogTitle-root": { padding: theme.spacing(4) },
        "& .MuiDialogContent-root": {
          borderTop: `1px solid ${theme.palette.grey[300]}`,
          borderBottom: `1px solid ${theme.palette.grey[300]}`,
          marginRight: theme.spacing(4),
          marginLeft: theme.spacing(4),
          paddingTop: theme.spacing(4),
          paddingBottom: theme.spacing(4),
        },
        "& .MuiPaper-root": {
          boxShadow: "none",
          bgcolor: theme.palette.background.default,
        },
      })}
      aria-labelledby="customized-dialog-title"
      {...props}
    >
      {children}
    </Dialog>
  );
};

export default CustomDialog;
