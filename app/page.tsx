import { Stack } from "@mui/material";
import HeroSection from "./_components/HeroSection";
import InvestSection from "./_components/InvestSection";
import FeaturesSections from "./_components/FeaturesSections";
import InvestmentPlansSections from "./_components/InvestmentPlansSection";
import TradingSignalsSection from "./_components/TradingSignalsSection";
import SubscriptionPlansSection from "./_components/SubscriptionPlansSection";
import EducationHubSection from "./_components/EducationHubSection";
import SuccessStoriesSection from "./_components/SuccessStoriesSection";

export default function Page() {
  return (
    <Stack sx={{ width: "100%", gap: 30 }}>
      <HeroSection />
      <InvestSection />
      <FeaturesSections />
      <InvestmentPlansSections />
      <TradingSignalsSection />
      <SubscriptionPlansSection />
      <EducationHubSection />
      <SuccessStoriesSection />
    </Stack>
  );
}
