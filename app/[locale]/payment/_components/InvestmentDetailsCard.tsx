import { useIsMobile } from "@/hooks/use-responsive";
import { Stack, Typography } from "@mui/material";

const InvestmentDetailsCard = () => {
  const isMobile = useIsMobile();

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"start"}
      gap={4}
      sx={{
        p: 3,
        borderRadius: 1,
        background:
          "linear-gradient(180deg, rgba(0, 27, 53, 0.71) 2.4%, rgba(153, 185, 216, 0.71) 50.48%, rgba(0, 34, 67, 0.71) 100%)",
        width: "100%",
      }}
    >
      <Typography variant={isMobile ? "p4-regular" : "p1-regular"} color="white">
        INVESTMENT DETAILS
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
        <Typography variant={isMobile ? "p4-regular" : "p1-regular"}>AMOUNT (USDT)</Typography>
        <Typography variant={isMobile ? "p4-regular" : "p1-regular"}>$100.00</Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
        <Typography variant={isMobile ? "p4-regular" : "p1-regular"}>NETWORK FEE</Typography>
        <Typography variant={isMobile ? "p4-regular" : "p1-regular"}>$2.50</Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
        <Typography variant={isMobile ? "p4-regular" : "p1-regular"}>TOTAL PAYMENT</Typography>
        <Typography variant={isMobile ? "p4-regular" : "p1-regular"}>$102.50</Typography>
      </Stack>
    </Stack>
  );
};

export default InvestmentDetailsCard;
