import { Button, Stack, Typography } from "@mui/material";

const StartJourneySection = () => {
  return (
    <Stack justifyContent={"center"} py={7} gap={25}>
      <Stack
        flexDirection={"row"}
        gap={10}
        justifyContent={"center"}
        alignItems={"start"}
        px={6}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontSize: "44px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            READY TO START YOUR
          </Typography>
          <Typography>CRYPTO SUCCESS JOURNEY?</Typography>
        </Stack>
        <Typography variant="h4-regular">
          JOIN OVER 50,000 INVESTORS ALREADY EARNING CONSISTENT PROFITS WITH OUR
          GUARANTEED INVESTMENT PLANS AND PROFESSIONAL TRADING SIGNALS.
        </Typography>
      </Stack>
      <Stack justifyContent={"center"} gap={25}>
        <Stack
          direction={"row"}
          gap={16}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          <Button variant="contained" color="primary">
            START INVESTING NOW
          </Button>
          <Button variant="contained" color="tertiary">
            WATCH DEMO
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          gap={20}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{ py: 10 }}
        >
          <Typography variant="h1-bold">YOU DONT HAVE AN ACCOUNT?</Typography>
          <Button variant="contained" color="info" sx={{ width: 150 }}>
            SIGN UP
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StartJourneySection;
