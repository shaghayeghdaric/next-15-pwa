"use client";

import { useIsMobile } from "@/hooks/use-responsive";
import RHFAutocomplete from "@/theme/components/hook-form/rhf-autocomplete";
import RHFTextField from "@/theme/components/hook-form/rhf-text-field";
import { getLabel } from "@/utils/get-label";
import { Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

const amounts = [
  { id: 100, fa_title: "100 USDT" },
  { id: 500, fa_title: "500 USDT" },
  { id: 1000, fa_title: "1000 USDT" },
  { id: 5000, fa_title: "5000 USDT" },
  { id: 10000, fa_title: "10000 USDT" },
];
type Option = {
  id: number;
  fa_title: string;
};
const TraditionalPaymentSection = () => {
  const { ...methods } = useForm();
  const { setValue, watch } = methods;
  const selectedAmountId = watch("amount");
  const isMobile = useIsMobile();

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"start"}
      gap={4}
      sx={{
        width: "50%",
        borderRadius: 1,
        py: 7,
        px: 14,
        background:
          "linear-gradient(180deg, rgba(0, 27, 53, 0.71) 2.4%, rgba(153, 185, 216, 0.71) 50.48%, rgba(0, 34, 67, 0.71) 100%)",
      }}
    >
      <img src="/images/traditional-payment.png" alt="Traditional Payment" width={38} height={38} />
      <Typography variant={isMobile ? "p4-bold" : "p1-bold"}>PAY WITH CARD OR BANK TRANSFER</Typography>
      <Typography variant={isMobile ? "p4-regular" : "p1-regular"}>
        ALL MAJOR CARDS ACCEPTED
        <br />
        BANK TRANSFER SUPPORT
        <br />
        PAYPAL & DIGITAL WALLETS
        <br />
        APPLE PAY & GOOGLE PAY
        <br />
        PCI-DSS COMPLIANT SECURITY
      </Typography>
      <Stack
        justifyContent={"center"}
        alignItems={"start"}
        gap={5}
        width={"100%"}
        sx={{
          py: 5,
          px: 14,
          borderRadius: 1,
          backgroundColor: "rgba(0, 165, 232, 0.2)",
        }}
      >
        <FormProvider {...methods}>
          <Typography variant={isMobile ? "p4-bold" : "p1-bold"}>INVESTMENT PLAN & AMOUNT</Typography>
          <RHFAutocomplete
            name="CURRENCY PAIR"
            fullWidth
            label={"CURRENCY PAIR"}
            placeholder="choose a currency pair"
            options={amounts}
            value={amounts.find((amount) => amount.id === selectedAmountId) || null}
            onChange={(_, newValue) => {
              const selectedAmount = newValue as Option | null;
              setValue("amount", selectedAmount?.id || 0, {
                shouldValidate: false,
              });
            }}
            getOptionLabel={(option) => getLabel(option, "fa_title")}
          />
          <RHFTextField name="FULL NAME" label="FULL NAME" />
          <RHFTextField name="CARD NUMBER" label="CARD NUMBER" />
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} gap={4} width={"100%"}>
            <img src="/images/master-card.png" alt="master card" height={29} width={102} />
            <img src="/images/apple-pay.png" alt="apple pay" height={39} width={45} />
            <img src="/images/paypall.png" alt="paypall" height={29} width={78} />
            <img src="/images/mc.png" alt="mc" height={29} width={31} />
          </Stack>
          <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={4} width={"100%"}>
            <RHFTextField name="EXPIRY DATE" label="EXPIRY DATE" />
            <RHFTextField name="CVV" label="CVV" />
          </Stack>
          <RHFTextField name="EMAIL ADDRESS" label="EMAIL ADDRESS" />
        </FormProvider>
      </Stack>
    </Stack>
  );
};

export default TraditionalPaymentSection;
