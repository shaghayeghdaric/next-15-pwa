import { Box, Stack, Typography } from "@mui/material";
import PlanCard from "./PlanCard";

const plans = [
  {
    title: "MONTHLY PLAN",
    price: 29,
    per: "PER MONTH",
    features: [
      "DAILY TRADING SIGNAL",
      "REAL-TIME NOTIFICATIONS",
      "MARKET ANALYSIS REPORTS",
      "EMAIL & MOBILE ALERTS",
      "BASIC SUPPORT",
      "MOBILE APP ACCESS",
    ],
    buttonName: "CHOOSE MONTHLY",
    isMostPopular: false,
  },
  {
    title: "3 MONTH PLAN",
    price: 69,
    per: "PER 3 MONTHS (20% OFF) ",
    features: [
      "EVERYTHING IN MONTHLY",
      "VIP TRADING SIGNALS",
      "EXCLUSIVE MARKET INSIGHTS",
      "PRIVATE TELEGRAM GROUP",
      "PRIORITY SUPPORT",
      "PERFORMANCE ANALYTICS",
      "ADVANCED TUTORIALS",
    ],
    buttonName: "CHOOSE 3-MONT",
    isMostPopular: true,
  },
  {
    title: "6 MONTH PLAN",
    price: 129,
    per: "PER 6 MONTHS (25% OFF)",
    features: [
      "EVERYTHING IN 3-MONTH",
      "AL-POWERED SIGNALS",
      "PERSONAL TRADING MENTOR",
      "RISK MANAGEMENT TOOLS",
      "API ACCESS",
      "24/7 PREMIUM SUPPORT",
      "WHITE-LABEL SOLUTIONS",
    ],
    buttonName: "CHOOSE 6-MONT",
    isMostPopular: false,
  },
];
const SubscriptionPlansSection = () => {
  return (
    <Stack justifyContent={"center"} alignItems="center" py={7} gap={10}>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", gap: 4, mb: 10, px: 6 }}
      >
        <Typography variant="h6-medium" sx={{ whiteSpace: "nowrap" }}>
          SUBSCRIPTION PLANS
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
            SUCCESS PLAN{" "}
          </Typography>
        </Stack>
        <Typography variant="h4-regular">
          GET ACCESS TO PREMIUM TRADING SIGNALS, ADVANCED ANALYTICS, AND
          EXCLUSIVE FEATURES WITH OUR FLEXIBLE SUBSCRIPTION PLANS.
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        gap={4}
        justifyContent="space-between"
        alignItems="end"
        width={"100%"}
      >
        {plans.map((plan, index) => (
          <PlanCard
            key={`subscription-plan-${index}-${plan.title}`}
            title={plan.title}
            price={plan.price}
            per={plan.per}
            features={plan.features}
            buttonName={plan.buttonName}
            isMostPopular={plan.isMostPopular}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default SubscriptionPlansSection;
