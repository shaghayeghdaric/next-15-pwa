"use client";

import { Stack, Typography } from "@mui/material";
import SignalsPieChart from "./_components/SignalsPieChart";
import SignalCard from "@/app/_components/SignalCard";
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
const SignalsPage = () => {
  const isMobile = useIsMobile();

  return (
    <Stack justifyContent={"start"} alignItems={"start"} gap={7}>
      <Typography variant={isMobile ? "h4-bold" : "h1-bold"}>PROFESSIONAL TRADING SIGNALS</Typography>
      <SignalsPieChart />
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

export default SignalsPage;
