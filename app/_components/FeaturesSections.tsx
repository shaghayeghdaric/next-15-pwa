import { Box, Stack, Typography } from "@mui/material";
import FeatureCard from "./featureCard";

const features = [
  {
    logo: "/images/icons/ai-powered-trading-signals.svg",
    title: "AI-POWERED TRADING SIGNALS",
    description:
      "GET REAL-TIME TRADING SIGNALS POWERED BY ADVANCED AI ALGORITHMS AND MACHINE LEARNING, WITH 95%+ ACCURACY RATE.",
    items: [
      "Real-time signal notifications",
      "Entry, exit, and stop-loss prices",
      "Risk management included",
      "Performance tracking & analytics",
    ],
  },
  {
    logo: "/images/icons/guaranteed-investment-returns.svg",
    title: "GUARANTEDD INVESTMENT RETURNS",
    description:
      "SECURE INVESTMENT PLANS WITH GUARANTEED MONTHLY RETURNS AND FLEXIBLE WITHDRAWAL OPTIONS FOR PEACE OF MIND.",
    items: [
      "5% guaranteed monthly returns",
      "Smart contract security",
      "Flexible withdrawal anytime",
      "Principal amount protected",
    ],
  },
  {
    logo: "/images/icons/complete-crypto-education.svg",
    title: "COMPLETE CRYPTO EDUCATION",
    description:
      "LEARN FROM BEGGINER TO ADVANCED LEVEL WITH OUR STRUCTURED LEARNING PATHS, VIDEO COURCES AND CERTIFICATIONS.",
    items: [
      "Bginner to expert curriculum",
      "Interactive video cources",
      "Progress tracking and certifications",
      "live mentorship sessions",
    ],
  },
  {
    logo: "/images/icons/bank-grade-security.svg",
    title: "BANK-GRADE SECURITY",
    description:
      "YOUR INVESTMENTS AND DATA ARE PROTECTED WITH ENTERPRISE-LEVEL SECURITY, MULTI-FACTOR AUTHENTICATION, AND INSURANCE COVERAGE.",
    items: [
      "256-bit SSL encryption",
      "Multi-factor authentication",
      "Cold storage for funds",
      "Insurance coverage included",
    ],
  },
  {
    logo: "/images/icons/mobile-first-experience.svg",
    title: "MOBILE-FIRST EXPERIENCE",
    description:
      "TRADE AND INVEST ON-THE-GO WITH OUR RESPONSIVE WEB APP AND NATIVE MOBILE APPLICATIONS FOR IOS AND ANDROID.",
    items: [
      "Progressive Web App (PWA)",
      "Real-time push notifications",
      "Offline functionality",
      "Biometric authentication",
    ],
  },
  {
    logo: "/images/icons/global-comunity.svg",
    title: "GLOBAL COMMUNITY",
    description:
      "JOIN A THRIVING COMMUNITY OF CRYPTO INVESTORS, SHARE STRATEGIES, AND LEARN FROM SUCCESSFUL TRADERS WORLDWIDE.",
    items: [
      "Private investor community",
      "Expert Q&A sessions",
      "Strategy sharing platform",
      "24/7 community support",
    ],
  },
];
const FeaturesSections = () => {
  return (
    <Stack justifyContent={"center"} alignItems="center" py={7}>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", gap: 4, mb: 10, px: 6 }}
      >
        <Typography variant="h6-medium" sx={{ whiteSpace: "nowrap" }}>
          OVER 50,000+ ACTIVE INVESTORS
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
        alignItems={"center"}
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
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            EVERYTHING
          </Typography>
          <Typography
            sx={{
              fontSize: "27px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            YOU NEED TO SUCCEED IN CRYPTO{" "}
          </Typography>
        </Stack>
        <Typography variant="h4-regular">
          OUR COMPREHENSIVE PLATFORM COMBINES PROFESSIONAL TRADING SIGNALS,
          GUARANTEED INVESTMENT RETURNS, AND WORD-CLASS EDUCATION TO MAXIMIZE
          YOUR CRYPTO SUCCESS.
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: "100%",
          mt: 10,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 8,
          "@media (max-width: 900px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
          "@media (max-width: 600px)": {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={`feature-card-${index}-${feature.title}`}
            logo={feature.logo}
            title={feature.title}
            description={feature.description}
            items={feature.items}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default FeaturesSections;
