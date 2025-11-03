"use client";

import { Stack, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import RHFAutocomplete from "@/theme/components/hook-form/rhf-autocomplete";
import { getLabel } from "@/utils/get-label";

const amounts = [
  { id: 100, fa_title: "100 USDT" },
  { id: 500, fa_title: "500 USDT" },
  { id: 1000, fa_title: "1000 USDT" },
  { id: 5000, fa_title: "5000 USDT" },
  { id: 10000, fa_title: "10000 USDT" },
];

type Amount = {
  id: number;
  fa_title: string;
};

const CalculatorSection = () => {
  const methods = useForm();
  const { setValue, watch } = methods;
  const selectedAmountId = watch("amount");

  return (
    <FormProvider {...methods}>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"start"}
        gap={10}
      >
        <Stack justifyContent={"center"} gap={24}>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontSize: "72px",
                fontWeight: 400,
                lineHeight: "47px",
                whiteSpace: "nowrap",
              }}
            >
              LIFE INSURANCE
            </Typography>
            <Typography
              sx={{
                fontSize: "45px",
                fontWeight: 400,
                lineHeight: "47px",
                whiteSpace: "nowrap",
              }}
            >
              INVESTMENT CALCULATOR
            </Typography>
          </Stack>
          <RHFAutocomplete
            name="INVESTMENT AMOUNT  (USDT)"
            sx={{ padding: 0 }}
            label="INVESTMENT AMOUNT  (USDT)"
            placeholder="choose an amount"
            options={amounts}
            value={
              amounts.find((amount) => amount.id === selectedAmountId) || null
            }
            onChange={(_, newValue) => {
              const selectedAmount = newValue as Amount | null;
              setValue("amount", selectedAmount?.id || 0, {
                shouldValidate: false,
              });
            }}
            getOptionLabel={(option) => getLabel(option, "fa_title")}
          />
        </Stack>
        <Stack justifyContent={"start"} alignItems={"center"} gap={4}>
          <Typography variant="h3-regular">
            SEE HOW YOUR INVESTMENT GROWS OVER 5 YEARS WITH COMPOUND RETURNS
          </Typography>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              p: 4,
              width: "100%",
            }}
          >
            <Typography variant="h2-medium" color="primary.dark">
              Total Return After 5 Years
            </Typography>
            <Typography
              color="primary.main"
              sx={{
                fontSize: "48px",
                fontWeight: 700,
              }}
            >
              $100.57
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={10}
            >
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Typography variant="h1-bold" color="primary.dark">
                  $50.00
                </Typography>
                <Typography color="primary.dark" variant="h3-light">
                  Initial
                </Typography>
              </Stack>
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Typography variant="h1-bold" color="primary.dark">
                  $50.57
                </Typography>
                <Typography color="primary.dark" variant="h3-light">
                  Profit
                </Typography>
              </Stack>
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Typography variant="h1-bold" color="primary.dark">
                  101.14%
                </Typography>
                <Typography color="primary.dark" variant="h3-light">
                  ROI
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </FormProvider>
  );
};
export default CalculatorSection;
