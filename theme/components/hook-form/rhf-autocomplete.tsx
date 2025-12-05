"use client";

import type React from "react";
import { InputLabel, Stack } from "@mui/material";
import type { AutocompleteProps } from "@mui/material/Autocomplete";
import Autocomplete from "@mui/material/Autocomplete";
// @mui
import TextField from "@mui/material/TextField";
import type { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

// ----------------------------------------------------------------------

interface Props<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
> extends Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, "ListboxProps"> {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: ReactNode;
  hasMore?: boolean;
  loadMore?: () => void;
  required?: boolean;
  ListboxProps?: React.HTMLAttributes<HTMLUListElement>;
}

export default function RHFAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
>({
  name,
  label,
  placeholder,
  helperText,
  hasMore,
  loadMore,
  renderInput,
  id,
  required,
  ...other
}: Omit<Props<T, Multiple, DisableClearable, FreeSolo>, "renderInput"> & {
  renderInput?: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>["renderInput"];
}) {
  const { control, setValue } = useFormContext();

  const handleScroll = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLElement;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 200 && hasMore) {
      loadMore?.();
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack sx={{ flex: 1, gap: 0.5 }}>
          {label && (
            <InputLabel
              disabled={field.disabled}
              shrink
              htmlFor={id || name}
              required={required}
              sx={{ color: "white", mb: 0.5 }}
            >
              {label}
            </InputLabel>
          )}
          <Autocomplete
            {...field}
            size="small"
            sx={{
              "& .MuiInputBase-sizeSmall": {
                borderRadius: "10px",
                minHeight: "42px",
                height: "42px",
              },
              "& .MuiChip-deleteIcon": {
                color: "red",
              },
              "& .MuiChip-label": {
                color: "grey.900",
              },
              "& .MuiAutocomplete-inputRoot": {
                padding: "4px 8px !important",
              },
            }}
            onChange={(_, newValue) => setValue(name, newValue, { shouldValidate: true })}
            noOptionsText="No options"
            slotProps={{
              listbox: {
                ...other.ListboxProps,
                onScroll: (event) => {
                  other.ListboxProps?.onScroll?.(event);
                  handleScroll(event);
                },
              },
            }}
            renderInput={
              renderInput ||
              ((params) => (
                <TextField
                  {...params}
                  name={name}
                  label={label ? undefined : name}
                  aria-label={label || name}
                  placeholder={placeholder}
                  error={!!error}
                  helperText={error ? error?.message : helperText}
                  size="small"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "42px",
                    },
                    "& .MuiFormHelperText-root": {
                      margin: "4px 0 0 0",
                    },
                  }}
                />
              ))
            }
            {...other}
          />
        </Stack>
      )}
    />
  );
}
