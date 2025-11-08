import { Box, Stack, Typography } from "@mui/material";
import PlanCard, { PlanCardProps } from "./PlanCard";
import { useTranslations } from "next-intl";

const SubscriptionPlansSection = () => {
  const t = useTranslations("subscriptionPlans");
  const plans = t.raw("plans");
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
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            {t("subtitle")}
          </Typography>
          <Typography
            sx={{
              fontSize: "27px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            {t("description")}
          </Typography>
        </Stack>
        <Typography variant="h4-regular">{t("mainDescription")}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        gap={4}
        justifyContent="space-between"
        alignItems="end"
        width={"100%"}
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
