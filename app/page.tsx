import { Stack } from "@mui/material";
import HeroSection from "./_components/HeroSection";
import InvestSection from "./_components/InvestSection";
import FeaturesSections from "./_components/FeaturesSections";

export default function Page() {
  return (
    <Stack sx={{ width: "100%", gap: 30 }}>
      <HeroSection />
      <InvestSection />
      <FeaturesSections />
    </Stack>
  );
}
