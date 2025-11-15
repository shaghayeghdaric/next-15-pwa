import { Button, Stack, Typography } from "@mui/material";
import BlockChainCard from "./BlockChainCard";
import ConnectWalletCard from "./ConnectWalletCard";
import InvestmentDetailsCard from "./InvestmentDetailsCard";

const CryptoPaymentSection = () => {
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
      <img
        src="/images/crypto-payment.png"
        alt="Crypto Payment"
        width={38}
        height={38}
      />
      <Typography variant="h4-bold">
        PAY DIRECTLY WITH CRYPTOCURRENCY
      </Typography>
      <Typography variant="h4-regular">
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
          py: 5,
          px: 20,
          borderRadius: 1,
          backgroundColor: "rgba(0, 165, 232, 0.2)",
          width: "100%",
        }}
      >
        <Typography variant="h4-bold">SELECT BLOCKCHAIN NETWORK</Typography>
        <Stack
          direction={"row"}
          gap={3}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
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
