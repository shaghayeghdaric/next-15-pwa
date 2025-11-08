import { Button, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const StartJourneySection = () => {
  const t = useTranslations("startJourney");
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
            {t("title")}
          </Typography>
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
            {t("getStarted")}
          </Button>
          <Button variant="contained" color="tertiary">
            {t("learnMore")}
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          gap={20}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{ py: 10 }}
        >
          <Typography variant="h1-bold">
            Available on: {t("ios")}, {t("android")}, {t("webApp")}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StartJourneySection;
