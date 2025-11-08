import { Box, Stack, Typography } from "@mui/material";
import SignalCard from "./SignalCard";
import { useTranslations } from "next-intl";

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
  return (
    <Stack justifyContent={"center"} alignItems="center" py={7} gap={10}>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", gap: 4, mb: 10, px: 6 }}
      >
        <Typography variant="h6-medium" sx={{ whiteSpace: "nowrap" }}>
          {t("title")}
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: 4,
            background:
              "linear-gradient(135deg, rgba(0, 165, 232, 0.5), rgba(6, 57, 77, 0.5))",
          }}
        ></Box>
      </Stack>
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
              fontSize: "78px",
              fontWeight: 700,
              lineHeight: "60px",
              whiteSpace: "nowrap",
            }}
          >
            {t("subtitle")}
          </Typography>
          <Typography variant="h2-bold">{t("description")}</Typography>
          <Typography
            sx={{
              fontSize: "27px",
              fontWeight: 700,
              lineHeight: "60px",
              whiteSpace: "nowrap",
            }}
          >
            {t("liveFeed")}
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h4-regular">{t("mainDescription")}</Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={10}
          >
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography variant="h3-bold">95.7%</Typography>
              <Typography variant="h4-light">{t("accuracy")}</Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography variant="h3-bold">2,847</Typography>
              <Typography variant="h4-light">{t("signals")}</Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography variant="h3-bold">+23.4%</Typography>
              <Typography variant="h4-light">{t("avgReturn")}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {signals.map((signal, index) => (
        <Stack
          key={`trading-signal-${index}-${signal.signalName}`}
          width={"100%"}
        >
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
