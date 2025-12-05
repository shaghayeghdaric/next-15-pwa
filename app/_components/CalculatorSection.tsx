"use client";

import { useTranslations } from "next-intl";
import { Stack, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import RHFAutocomplete from "@/theme/components/hook-form/rhf-autocomplete";
import { getLabel } from "@/utils/get-label";
import { useIsMobile } from "@/hooks/use-responsive";

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
  const t = useTranslations("invest");
  const methods = useForm();
  const { setValue, watch } = methods;
  const selectedAmountId = watch("amount");
  const isMobile = useIsMobile();

  return (
    <FormProvider {...methods}>
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"start"}
        sx={{
          gap: { xs: 5, md: 10 },
          p: { xs: 5, md: 10 },
          my: { xs: 5, md: 10 },
          background: "linear-gradient(135deg, rgba(0, 165, 232, 0.5), rgba(6, 57, 77, 0.5))",
          borderRadius: 2,
        }}
      >
        <Stack sx={{ gap: { xs: 6, md: 24 } }}>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography variant={isMobile ? "h5-bold" : "h3-bold"}>{t("investmentCalculator")}</Typography>
            <Typography variant={isMobile ? "h6-regular" : "h5-regular"}>{t("investmentAmount")}</Typography>
          </Stack>
          <RHFAutocomplete
            name="INVESTMENT AMOUNT (USDT)"
            sx={{ padding: 0 }}
            label={t("investmentAmount") + " (USDT)"}
            placeholder="choose an amount"
            options={amounts}
            value={amounts.find((amount) => amount.id === selectedAmountId) || null}
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
          <Typography variant={isMobile ? "p2-regular" : "h6-regular"}>
            SEE HOW YOUR INVESTMENT GROWS OVER 5 YEARS WITH COMPOUND RETURNS
          </Typography>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              p: { xs: 2, md: 5 },
              width: "100%",
              gap: { xs: 2, md: 5 },
            }}
          >
            <Typography variant={isMobile ? "p2-regular" : "h6-medium"} color="primary.dark">
              {t("totalAfter12Months").replace("12", "5")}
            </Typography>
            <Typography color="primary.main" variant={isMobile ? "h5-bold" : "h3-bold"}>
              $100.57
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} gap={10}>
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Typography variant={isMobile ? "p2-bold" : "h5-bold"} color="primary.dark">
                  $50.00
                </Typography>
                <Typography color="primary.dark" variant={isMobile ? "p2-light" : "h6-light"}>
                  Initial
                </Typography>
              </Stack>
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Typography variant={isMobile ? "p2-bold" : "h5-bold"} color="primary.dark">
                  $50.57
                </Typography>
                <Typography color="primary.dark" variant={isMobile ? "p2-light" : "h6-light"}>
                  Profit
                </Typography>
              </Stack>
              <Stack justifyContent={"center"} alignItems={"center"}>
                <Typography variant={isMobile ? "p2-bold" : "h5-bold"} color="primary.dark">
                  101.14%
                </Typography>
                <Typography color="primary.dark" variant={isMobile ? "p2-light" : "h6-light"}>
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
