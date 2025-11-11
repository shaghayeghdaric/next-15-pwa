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

  const handleScroll = (event: any) => {
    const { target } = event;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 200 && hasMore) {
      loadMore?.();
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack sx={{ flex: 1 }}>
          {label && (
            <InputLabel disabled={field.disabled} shrink htmlFor={id || name} required={required}>
              {label}
            </InputLabel>
          )}
          <Autocomplete
            {...field}
            sx={{
              "& .MuiInputBase-sizeSmall": {
                borderRadius: "10px",
              },
              "& .MuiChip-deleteIcon": {
                color: "red",
              },
              "& .MuiChip-label": {
                color: "grey.900",
              },
            }}
            onChange={(_, newValue) => setValue(name, newValue, { shouldValidate: true })}
            noOptionsText="موردی یافت نشد"
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
                  name={name}
                  label={label ? undefined : name}
                  aria-label={label || name}
                  placeholder={placeholder}
                  error={!!error}
                  helperText={error ? error?.message : helperText}
                  {...params}
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
