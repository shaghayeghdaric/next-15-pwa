import { Button, Stack, Typography } from "@mui/material";

const ConnectWalletCard = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
      sx={{
        py: 3,
        borderRadius: 1,
        background:
          "linear-gradient(180deg, rgba(0, 27, 53, 0.71) 2.4%, rgba(153, 185, 216, 0.71) 50.48%, rgba(0, 34, 67, 0.71) 100%)",
        width: "100%",
      }}
    >
      <Typography variant="h4-regular" color="white">
        WALLET STATUS: NOT CONNECTED
      </Typography>
      <Button variant="contained" color="primary">
        CONNECT WALLET
      </Button>
    </Stack>
  );
};

export default ConnectWalletCard;
