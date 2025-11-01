import { Box, Stack, Typography } from "@mui/material";
import FeatureCard from "./FeaturesCard";
import InvestmentTypesCard from "./InvestmentTypesCard";

const features = [
  {
    logo: "/images/icons/short-term-investment.svg",
    title: "SHORT-TERM INVESTMENT",
    description: "PERFECT FOR MONTHLY WITH FULL FLEXIBILITY",
    items: [
      "GUARANTEED 5% MONTHLY RETURNS",
      "WITHDRAW ANYTIME WITHOUT PENALTY",
      "SMART CONTRACT SECURITY",
      "MINIMUM INVESTMENT: $100 USDT",
      "COMPOUND OR WITHDRAW PROFITS",
      "24/7 ACCOUNT MONITORING",
    ],
    percent: "5%",
    returnType: "Guaranteed Monthly Returns",
    buttonName: "START MONTHLY RETURNS",
    modalKey: "short-term-investment",
  },
  {
    logo: "/images/icons/life-insurance-plan.svg",
    title: "LIFE INSURANCE PLAN",
    description: "PERFECT FOR  STUDY  MONTHLY INCOME WITH FULL FLEXIBILITY",
    items: [
      " 15% ANNUAL COMPOUND RETURNS",
      "INVESTMENT RANGE: $10 - $100 USDT",
      "5-YEARS COMMITMENT PERIOD",
      "LIFE INSURANCE COVERAGE INCLUDED",
      "PRINCIPAL AMOUNT GUARANTEED",
      "EARLY WITHDRAWAL OPTIONS AVAILABLE",
    ],
    percent: "15%",
    returnType: "ANNUAL COMPOUND RETURNS",
    buttonName: "CALCULATE MY RETURNS",
    modalKey: "life-insurance-plan",
  },
];
const InvestmentPlansSections = () => {
  return (
    <Stack justifyContent={"center"} alignItems="center" py={7}>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", gap: 4, mb: 10, px: 6 }}
      >
        <Typography variant="h6-medium" sx={{ whiteSpace: "nowrap" }}>
          INVESTMENT PLANS
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
            CHOOSE YOUR
          </Typography>
          <Typography
            sx={{
              fontSize: "27px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            INVESTMENT STRATEGY
          </Typography>
        </Stack>
        <Typography variant="h4-regular">
          WHETHER YOU PREFER GUARANTEED MONTHLY RETURNS OR LONG-TERM COMPOUND
          GROWTH, WE HAVE THE PERFECT INVESTMENT PLAN FOR YOU GOALS.
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: "100%",
          mt: 10,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
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
          <InvestmentTypesCard
            key={`feature-card-${index}-${feature.title}`}
            logo={feature.logo}
            title={feature.title}
            description={feature.description}
            items={feature.items}
            percent={feature.percent}
            returnType={feature.returnType}
            buttonName={feature.buttonName}
            modalKey={feature.modalKey}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default InvestmentPlansSections;
