"use client";

import { Box, Stack, Typography } from "@mui/material";
import PlanCard, { type PlanCardProps } from "./PlanCard";
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-responsive";

const SubscriptionPlansSection = () => {
  const t = useTranslations("subscriptionPlans");
  const plans = t.raw("plans");
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
        </Stack>
        <Typography variant={isMobile ? "p4-regular" : "h6-regular"}>{t("mainDescription")}</Typography>
      </Stack>
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems="end"
        sx={{ width: "100%", gap: { xs: 4, lg: 6 } }}
      >
        {plans.map((plan: PlanCardProps) => (
          <PlanCard
            key={`subscription-plan-${plan.title}`}
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
