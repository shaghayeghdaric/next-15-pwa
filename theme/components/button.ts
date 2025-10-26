import type { Theme, Components } from "@mui/material/styles";

// Only use colors that are valid for MUI Button components
export const COLOR_KEYS = [
  "primary",
  "secondary",
] as const;

type ButtonColorSchema = typeof COLOR_KEYS[number];

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    special: true;
    "special-2": true;
    "primary-light": true;
  }

  interface ButtonPropsVariantOverrides {
    soft: true;
  }

  interface ButtonPropsSizeOverrides {
    xLarge: true;
    medium: false;
  }
}

const createVariantsForColor = (color: ButtonColorSchema) => {
  const prefix = `--mui-palette-${color}-`;

  return [
    // ─── contained / COLOR ─────────────────────────────────────────────────
    {
      props: { variant: "contained" as const, color },
      style: {
        backgroundColor: `var(${prefix}main)`,
        color: `var(${prefix}contrastText)`,

        // ".MuiButton-icon": {
        //   color: `var(${prefix}contrastText)`,
        //   "svg path, svg circle": {
        //     stroke: `var(${prefix}contrastText)`,
        //   },
        // },

        "&:hover": {
          backgroundColor: `var(${prefix}dark)`,
        },

        "&.Mui-disabled": {
          backgroundColor: "var(--mui-palette-grey-200)",
        },
      },
    },

    // ─── outlined / COLOR ──────────────────────────────────────────────────
    {
      props: { variant: "outlined" as const, color },
      style: {
        backgroundColor: "transparent",
        color: `var(${prefix}main)`,
        borderColor: `var(${prefix}main)`,

        // ".MuiButton-icon": {
        //   color: `var(${prefix}main)`,
        //   "svg path, svg circle": {
        //     stroke: `var(${prefix}main)`,
        //   },
        // },

        "&:hover": {
          backgroundColor: `var(${prefix}lighter)`,
        },

        "&.Mui-disabled": {
          borderColor: "var(--mui-palette-grey-500)",
          color: "var(--mui-palette-grey-500)",
        },
      },
    },

    // ─── text / COLOR ───────────────────────────────────────────────────────
    {
      props: { variant: "text" as const, color },
      style: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: `var(${prefix}main)`,

        // ".MuiButton-icon": {
        //   color: `var(${prefix}main)`,
        //   "svg path, svg circle": {
        //     stroke: `var(${prefix}main)`,
        //   },
        // },

        "&:hover": {
          backgroundColor: `var(${prefix}lighter)`,
        },
      },
    },

    // ─── soft / COLOR (custom) ─────────────────────────────────────────────
    {
      props: { variant: "soft" as const, color },
      style: {
        color: `var(${prefix}dark)`,
        backgroundColor: `var(${prefix}lighter)`,
        borderColor: `var(${prefix}lighter)`,

        // ".MuiButton-icon": {
        //   color: `var(${prefix}dark)`,
        //   "svg path, svg circle": {
        //     stroke: `var(${prefix}dark)`,
        //   },
        // },

        "&:hover": {
          borderColor: `var(${prefix}dark)`,
          backgroundColor: `var(${prefix}lighter)`,
        },

        "&.Mui-disabled": {
          backgroundColor: "var(--mui-palette-grey-200)",
          borderColor: "var(--mui-palette-grey-200)",
        },
      },
    },

    // ─── sizeXLarge / COLOR ───────────────────────────────────────────────
    {
      props: { size: "xLarge" as const },
      style: ({ theme }: { theme: Theme }) => ({
        height: "48px",
        padding: "12px",
        ...theme.typography["h6-medium"],
      }),
    },
  ];
};

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    variant: "contained",
    color: "primary",
    size: "xLarge",
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      borderRadius: "5px",
      border: "1px solid transparent",
      whiteSpace: "nowrap",
      textTransform: "none",
      "&.Mui-disabled": {
        color: "var(--mui-palette-grey-600)",
        ".MuiButton-icon": {
          color: "var(--mui-palette-grey-600)",
          "svg path, svg circle": { stroke: "var(--mui-palette-grey-600)" },
        },

        "&.MuiButton-loading": {
          color: "transparent",
          ".MuiButton-icon": {
            color: "transparent",
            "svg path, svg circle": { stroke: "transparent" },
          },
        },
      },

      variants: [
        ...COLOR_KEYS.flatMap((color) => createVariantsForColor(color)),
        // Custom primary-light color variant
        {
          props: { variant: "outlined" as const, color: "primary-light" as const },
          style: ({ theme }) => ({
            backgroundColor: "transparent",
            color: theme.palette.primary.light,
            borderColor: theme.palette.primary.light,
            "&:hover": {
              backgroundColor: `${theme.palette.primary.light}0A`, // primary.light with opacity
              borderColor: theme.palette.primary.light,
            },
            "&.Mui-disabled": {
              borderColor: theme.palette.grey[500],
              color: theme.palette.grey[500],
            },
          }),
        },
        {
          props: { variant: "contained" as const, color: "primary-light" as const },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.primary.light,
            color: "#ffffff",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
            "&.Mui-disabled": {
              backgroundColor: theme.palette.grey[200],
              color: theme.palette.grey[600],
            },
          }),
        },
      ],
    },

    startIcon: { marginLeft: 4, marginRight: 0 },
    endIcon: { marginRight: 4, marginLeft: 0 },

    sizeLarge: ({ theme }) => ({
      height: "40px",
      padding: "12px",
      ...theme.typography["p1-medium"],
    }),
    sizeSmall: ({ theme }) => ({
      height: "32px",
      padding: "12px",
      ...theme.typography["p1-medium"],
    }),
  },
};
