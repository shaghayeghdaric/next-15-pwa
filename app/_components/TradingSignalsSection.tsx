"use client";

import { Box, Stack, Typography } from "@mui/material";
import SignalCard from "./SignalCard";
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-responsive";

const signals = [
  {
    signalName: "BTC/USD",
    entry: 45000,
    takeProfit: 47000,
    stopLoss: 44000,
    risk: 2,
    status: "Buy",
    accuracy: 96,
    lastUpdated: "2024-06-01 12:00",
  },
  {
    signalName: "ETH/USD",
    entry: 3000,
    takeProfit: 3200,
    stopLoss: 2900,
    risk: 2.5,
    status: "Buy",
    accuracy: 94,
    lastUpdated: "2024-06-01 12:30",
  },
  {
    signalName: "LTC/USD",
    entry: 150,
    takeProfit: 165,
    stopLoss: 145,
    risk: 3,
    status: "Sell",
    accuracy: 92,
    lastUpdated: "2024-06-01 13:00",
  },
];
const TradingSignalsSection = () => {
  const t = useTranslations("tradingSignals");
  const isMobile = useIsMobile();

  return (
    <Stack justifyContent={"center"} alignItems="center" sx={{ py: { xs: 3, md: 7 }, gap: { xs: 5, md: 10 } }}>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", gap: { xs: 10, md: 15 }, mb: { xs: 5, md: 10 } }}
      >
        <Typography variant="p4-medium" sx={{ whiteSpace: "nowrap" }}>
          {t("title")}
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: 4,
            background: "linear-gradient(135deg, rgba(0, 165, 232, 0.5), rgba(6, 57, 77, 0.5))",
          }}
        ></Box>
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
            {t("subtitle")}
          </Typography>
          <Typography variant={isMobile ? "h6-bold" : "h4-bold"}>{t("description")}</Typography>
          <Typography variant={isMobile ? "p4-bold" : "h6-bold"}>{t("liveFeed")}</Typography>
        </Stack>
        <Stack sx={{ gap: { xs: 2, md: 4 } }}>
          <Typography variant={isMobile ? "p4-regular" : "h6-regular"}>{t("mainDescription")}</Typography>
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} gap={10}>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography variant={isMobile ? "p2-bold" : "h6-bold"}>95.7%</Typography>
              <Typography variant={isMobile ? "p4-light" : "p1-light"}>{t("accuracy")}</Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography variant={isMobile ? "p2-bold" : "h6-bold"}>2,847</Typography>
              <Typography variant={isMobile ? "p4-light" : "p1-light"}>{t("signals")}</Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography variant={isMobile ? "p2-bold" : "h6-bold"}>+23.4%</Typography>
              <Typography variant={isMobile ? "p4-light" : "p1-light"}>{t("avgReturn")}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {signals.map((signal, index) => (
        <Stack key={`trading-signal-${index}-${signal.signalName}`} width={"100%"}>
          <SignalCard
            signalName={signal.signalName}
            entry={signal.entry}
            takeProfit={signal.takeProfit}
            stopLoss={signal.stopLoss}
            risk={signal.risk}
            status={signal.status}
            accuracy={signal.accuracy}
            lastUpdated={signal.lastUpdated}
          />
        </Stack>
      ))}
    </Stack>
  );
};

export default TradingSignalsSection;
