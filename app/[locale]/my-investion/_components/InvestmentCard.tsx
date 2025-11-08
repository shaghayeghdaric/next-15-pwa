import { Stack, Typography } from "@mui/material";

const InvestmentCard = () => {
  return (
    <Stack
      gap={2}
      alignItems={"start"}
      sx={{
        py: 6,
        px: 12,
        borderRadius: 1,
        backgroundColor: "rgba(0, 165, 232, 0.2)",
        width: "100%",
      }}
    >
      <Typography variant="h4-bold">Total Portfolio Balance</Typography>
      <Typography variant="h1-bold" color="primary.main">
        $12,847.50
      </Typography>
      <Typography variant="h6-regular">
        +5.67% from last month (+$715.30)
      </Typography>
    </Stack>
  );
};

export default InvestmentCard;
