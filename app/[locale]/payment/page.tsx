"use client";

import { Box, Stack, Typography } from "@mui/material";
import CryptoPaymentSection from "./_components/CryptoPaymentSection";
import TraditionalPaymentSection from "./_components/TraditionalPaymentSection";
import { useIsMobile } from "@/hooks/use-responsive";

const PaymentPage = () => {
  const isMobile = useIsMobile();

  return (
    <Stack justifyContent={"center"} alignItems="center" sx={{ py: { xs: 3, md: 7 }, gap: { xs: 5, md: 10 } }}>
      <Stack flexDirection={"row"} justifyContent={"start"} alignItems={"center"} sx={{ width: "100%" }}>
        <Typography variant="p4-medium" sx={{ whiteSpace: "nowrap" }}>
          FLEXIBLE PAYMENT OPTIONS
        </Typography>
      </Stack>
      <Stack
        flexDirection={isMobile ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"start"}
        sx={{ gap: { xs: 5, md: 10 } }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant={isMobile ? "h4-bold" : "h2-bold"}
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            CHOOSE YOUR
          </Typography>
          <Typography variant={isMobile ? "h6-bold" : "h4-bold"}>PREFERRED PAYMENT METHOD</Typography>
        </Stack>
        <Typography variant={isMobile ? "p4-regular" : "h6-regular"}>
          START INVESTING WITH CONFIDENCE USING CRYPTOCURRENCY OR TRADITIONAL PAYMENT METHODS. SECURE, FAST, AND
          DESIGNED FOR GLOBAL ACCESSIBILITY.
        </Typography>
      </Stack>
      <Stack width={"100%"} direction={"row"} gap={4} justifyContent={"center"} alignItems={"flex-start"}>
        <CryptoPaymentSection />
        <TraditionalPaymentSection />
        <Stack />
      </Stack>
    </Stack>
  );
};
export default PaymentPage;
