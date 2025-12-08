"use client";

import { useIsMobile } from "@/hooks/use-responsive";
import { Button, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const StartJourneySection = () => {
  const t = useTranslations("startJourney");
  const isMobile = useIsMobile();

  return (
    <Stack justifyContent={"center"} alignItems="center" sx={{ py: { xs: 3, md: 7 }, gap: { xs: 10, md: 33 } }}>
      <Stack
        flexDirection={isMobile ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"start"}
        sx={{ gap: { xs: 5, md: 10 } }}
      >
        {" "}
        <Typography variant={isMobile ? "h4-bold" : "h2-bold"}>{t("title")}</Typography>
        <Typography variant={isMobile ? "p4-regular" : "h6-regular"}>
          JOIN OVER 50,000 INVESTORS ALREADY EARNING CONSISTENT PROFITS WITH OUR GUARANTEED INVESTMENT PLANS AND
          PROFESSIONAL TRADING SIGNALS.
        </Typography>
      </Stack>
      <Stack justifyContent={"center"} sx={{ gap: { xs: 10, md: 16 } }}>
        <Stack direction={"row"} justifyContent={"flex-start"} alignItems={"center"} sx={{ gap: { xs: 5, md: 16 } }}>
          <Button variant="contained" color="primary" fullWidth={isMobile}>
            {t("getStarted")}
          </Button>
          <Button variant="contained" color="tertiary" fullWidth={isMobile}>
            {t("learnMore")}
          </Button>
        </Stack>
        <Typography variant={isMobile ? "p2-bold" : "h6-bold"}>
          Available on: {t("ios")}, {t("android")}, {t("webApp")}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default StartJourneySection;
