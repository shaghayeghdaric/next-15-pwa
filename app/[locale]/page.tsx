import { Stack } from "@mui/material";
import HeroSection from "../_components/HeroSection";
import InvestSection from "../_components/InvestSection";
import FeaturesSections from "../_components/FeaturesSections";
import InvestmentPlansSection from "../_components/InvestmentPlansSection";
import TradingSignalsSection from "../_components/TradingSignalsSection";
import SubscriptionPlansSection from "../_components/SubscriptionPlansSection";
import EducationHubSection from "../_components/EducationHubSection";
import SuccessStoriesSection from "../_components/SuccessStoriesSection";
import StartJourneySection from "../_components/StartJourneySection";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <Stack sx={{ width: "100%", gap: { xs: 5, md: 30 } }}>
      <HeroSection />
      <InvestSection />
      <FeaturesSections />
      <InvestmentPlansSection />
      <TradingSignalsSection />
      <SubscriptionPlansSection />
      <EducationHubSection />
      <SuccessStoriesSection />
      <StartJourneySection />
    </Stack>
  );
}
