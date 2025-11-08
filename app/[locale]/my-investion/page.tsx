import { Stack, Typography } from "@mui/material";
import InvestmentCard from "./_components/InvestmentCard";
import OptionsCard from "./_components/OptionsCard";
import LastPremiumSignals from "./_components/LastPremiumSignals";
import PortfolioPerformance from "./_components/ProtfolioPerformance";

const optionCardData = [
  {
    icon: "/images/icons/profile/smart-investment.svg",
    title: " SMART INVESTMENT",
    description: "SHORT-TERM INVESTMENT",
  },
  {
    icon: "/images/icons/profile/trading-signals.svg",
    title: "TRADING SIGNALS",
    description: "PROFESSIONAL ALL SIGNALS",
  },
  {
    icon: "/images/icons/profile/learn-earn.svg",
    title: "LEARN & EARN",
    description: "CRYPTO EDUCATION HUB",
  },
  {
    icon: "/images/icons/profile/analytics-pro.svg",
    title: "ANALYTICS PRO",
    description: "ADVANCED ANALYTICS",
  },
];
const MyInvestmentsPage = () => {
  return (
    <Stack justifyContent={"start"} alignItems={"start"} gap={6}>
      <Typography variant="h1-bold">CRYPTO INVEST PRO</Typography>
      <Typography variant="h3-bold" color="primary.main">
        WELCOME BACK MARY
      </Typography>
      <Typography variant="h4-regular">
        HERE'S YOUR PORTFOLIO PERFORMANCE AND LATEST OPPORTUNITIES
      </Typography>
      <InvestmentCard />
      <PortfolioPerformance />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={4}
        width={"100%"}
      >
        {optionCardData.map((item, index) => (
          <OptionsCard
            key={`option-card-${index}-${item.title}`}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </Stack>
      <LastPremiumSignals />
    </Stack>
  );
};

export default MyInvestmentsPage;
