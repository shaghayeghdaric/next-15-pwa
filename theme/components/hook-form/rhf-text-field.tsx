import { formatNumberWithSeparator } from "@/utils/format-number";
import { digits } from "@/utils/number";
import { toExactNumber } from "@/utils/toNumber";
import { InputLabel, Stack, Typography } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";
import TextField from "@mui/material/TextField";
import type { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

type Props = TextFieldProps & {
  name: string;
  subtitle?: string;
  isMoney?: boolean;
  isMobile?: boolean;
};

const handleMoneyChange = (event: ChangeEvent<HTMLInputElement>, onChange: (value: any) => void) => {
  const exactValue = toExactNumber(digits(event.target.value, "en"));
  onChange(exactValue);
};

const handleMobileChange = (event: ChangeEvent<HTMLInputElement>, onChange: (value: any) => void) => {
  const input = event.target.value;
  const englishInput = digits(input, "en");
  const regex = /^[0-9+()]*$/; // Allow numbers, '+', '(', and ')'

  if (regex.test(englishInput)) {
    onChange(englishInput);
  } else {
    // Prevent the change if the input contains invalid characters
    event.preventDefault();
  }
};

const handleNumberChange = (event: ChangeEvent<HTMLInputElement>, onChange: (value: any) => void) => {
  onChange(Number(event.target.value));
};

const handleDefaultChange = (event: ChangeEvent<HTMLInputElement>, onChange: (value: any) => void) => {
  onChange(event.target.value);
};

const formatMoneyValue = (value: any) => {
  if (!value) {
    return "";
  }

  if (value === 0 || value === "0") {
    return 0;
  }

  const numberFormat = toExactNumber(digits(value, "en"));
  return formatNumberWithSeparator(numberFormat || 0);
};

export default function RHFTextField({
  name,
  subtitle,
  id,
  label,
  helperText,
  type,
  isMoney,
  isMobile,
  disabled,
  required,
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
          if (isMoney) {
            handleMoneyChange(event, field.onChange);
          } else if (isMobile) {
            handleMobileChange(event, field.onChange);
          } else if (type === "number") {
            handleNumberChange(event, field.onChange);
          } else {
            handleDefaultChange(event, field.onChange);
          }
        };

        const formattedValue = isMoney ? formatMoneyValue(field.value) : field.value;
        return (
          <Stack sx={{ width: "100%", flex: 1 }}>
            {label && (
              <InputLabel
                disabled={disabled}
                required={required}
                shrink
                htmlFor={id || name}
                sx={{ color: "white", mb: 0.5, fontSize: { xs: "12px", md: "16px" } }}
              >
                {label}
              </InputLabel>
            )}

            {subtitle && (
              <Typography variant="p4-regular" color={disabled ? "grey.500" : "grey.700"} mb="10px" mt="-6px" ml="12px">
                {subtitle}
              </Typography>
            )}
            <TextField
              {...field}
              id={id || name}
              fullWidth
              type={type === "number" ? "text" : type}
              value={isMoney ? formattedValue : field.value}
              onChange={handleOnChange}
              slotProps={{
                htmlInput: {
                  ...(type === "number" ? { inputMode: "numeric", pattern: "[0-9]*" } : {}),
                  ...other.slotProps?.htmlInput,
                },
                input: {
                  ...(type === "number" ? { sx: { textAlign: "left" } } : {}),
                  ...other.slotProps?.input,
                },
                ...other.slotProps,
              }}
              error={!!error}
              helperText={error ? error?.message : helperText}
              disabled={disabled}
              {...other}
            />
          </Stack>
        );
      }}
    />
  );
}
