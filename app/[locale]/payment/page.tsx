import { Stack, Typography } from "@mui/material";
import CryptoPaymentSection from "./_components/CryptoPaymentSection";
import TraditionalPaymentSection from "./_components/TraditionalPaymentSection";

const PaymentPage = () => {
  return (
    <Stack
      justifyContent={"start"}
      alignItems={"start"}
      sx={{ width: "100%", gap: 4 }}
    >
      <Stack
        flexDirection={"row"}
        justifyContent={"start"}
        alignItems={"center"}
        sx={{ width: "100%", gap: 4, mb: 10, px: 6 }}
      >
        <Typography variant="h6-medium" sx={{ whiteSpace: "nowrap" }}>
          FLEXIBLE PAYMENT OPTIONS
        </Typography>
      </Stack>
      <Stack
        flexDirection={"row"}
        gap={10}
        justifyContent={"space-between"}
        alignItems={"end"}
        px={6}
        width={"100%"}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontSize: "78px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            CHOOSE YOUR
          </Typography>
          <Typography
            sx={{
              fontSize: "27px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            PREFERRED PAYMENT METHOD
          </Typography>
        </Stack>
        <Typography variant="h4-regular">
          START INVESTING WITH CONFIDENCE USING CRYPTOCURRENCY OR TRADITIONAL
          PAYMENT METHODS. SECURE, FAST, AND DESIGNED FOR GLOBAL ACCESSIBILITY.
        </Typography>
      </Stack>
      <Stack
        width={"100%"}
        direction={"row"}
        gap={4}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <CryptoPaymentSection />
        <TraditionalPaymentSection />
        <Stack />
      </Stack>
    </Stack>
  );
};
export default PaymentPage;
