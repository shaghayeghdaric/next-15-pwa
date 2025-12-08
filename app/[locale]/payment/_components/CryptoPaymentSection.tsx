"use client";

import { Button, Stack, Typography } from "@mui/material";
import BlockChainCard from "./BlockChainCard";
import ConnectWalletCard from "./ConnectWalletCard";
import InvestmentDetailsCard from "./InvestmentDetailsCard";
import { useIsMobile } from "@/hooks/use-responsive";

const CryptoPaymentSection = () => {
  const isMobile = useIsMobile();

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"start"}
      gap={4}
      sx={{
        width: { xs: "100%", md: "50%" },
        borderRadius: 1,
        py: { xs: 4, md: 12 },
        px: { xs: 4, md: 14 },
        background:
          "linear-gradient(180deg, rgba(0, 27, 53, 0.71) 2.4%, rgba(153, 185, 216, 0.71) 50.48%, rgba(0, 34, 67, 0.71) 100%)",
      }}
    >
      <img src="/images/crypto-payment.png" alt="Crypto Payment" width={38} height={38} />
      <Typography variant={isMobile ? "p4-bold" : "p1-bold"}>PAY DIRECTLY WITH CRYPTOCURRENCY</Typography>
      <Typography variant={isMobile ? "p4-regular" : "p1-regular"}>
        CONNECT YOUR WALLET SECURELY
        <br /> MULTIPLE BLOCKCHAIN NETWORKS
        <br /> LOWER TRANSACTION FEES
        <br /> INSTANT CONFIRMATION
        <br /> DECENTRALIZED SECURITY
      </Typography>
      <Stack
        justifyContent={"center"}
        alignItems={"start"}
        gap={6}
        sx={{
          p: { xs: 2, md: 5 },
          borderRadius: 1,
          backgroundColor: "rgba(0, 165, 232, 0.2)",
          width: "100%",
        }}
      >
        <Typography variant={isMobile ? "p4-bold" : "p1-bold"}>SELECT BLOCKCHAIN NETWORK</Typography>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "100%", gap: { xs: 2, md: 3 } }}
        >
          <BlockChainCard icon={"/images/trx.png"} name={"TRX SCAN"} />
          <BlockChainCard icon={"/images/eth.png"} name={"ETH SCAN"} />
          <BlockChainCard icon={"/images/sol.png"} name={"SOL SCAN"} />
        </Stack>
        <ConnectWalletCard />
        <InvestmentDetailsCard />
        <Button variant="contained" color="primary" sx={{ width: "100%" }}>
          CONNECT WALLET CONTINUE
        </Button>
      </Stack>
    </Stack>
  );
};

export default CryptoPaymentSection;
