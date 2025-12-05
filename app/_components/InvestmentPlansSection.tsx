"use client";
import { Box, Stack, Typography } from "@mui/material";
import InvestmentTypesCard from "./InvestmentTypesCard";
import CalculatorSection from "./CalculatorSection";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { useIsMobile } from "@/hooks/use-responsive";

const InvestmentPlansSections = () => {
  const t = useTranslations("investmentPlans");
  const isMobile = useIsMobile();
  const features = useMemo(
    () => [
      {
        logo: "/images/icons/short-term-investment.svg",
        title: t("shortTerm.title"),
        description: t("shortTerm.description"),
        items: t.raw("shortTerm.features"),
        percent: t("shortTerm.percent"),
        returnType: t("shortTerm.returnType"),
        buttonName: t("shortTerm.buttonName"),
        modalKey: "short-term-investment",
        condition: "Short Term Investment Condition",
      },
      {
        logo: "/images/icons/life-insurance-plan.svg",
        title: t("lifeInsurance.title"),
        description: t("lifeInsurance.description"),
        items: t.raw("lifeInsurance.features"),
        percent: t("lifeInsurance.percent"),
        returnType: t("lifeInsurance.returnType"),
        buttonName: t("lifeInsurance.buttonName"),
        modalKey: "life-insurance-plan",
        condition: "Life Insurance Investment Condition",
      },
    ],
    [t]
  );

  const dividerGradient = useMemo(
    () => ({
      width: "100%",
      height: 4,
      background: "linear-gradient(135deg, rgba(0, 165, 232, 0.5), rgba(6, 57, 77, 0.5))",
    }),
    []
  );
  return (
    <Stack justifyContent={"center"} alignItems="center" py={7} gap={10}>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", gap: 4, mb: 10, px: 6 }}
      >
        <Typography variant="p4-medium" sx={{ whiteSpace: "nowrap" }}>
          {t("title")}
        </Typography>
        <Box sx={dividerGradient}></Box>
      </Stack>
      <Stack flexDirection={"row"} gap={10} justifyContent={"center"} alignItems={"start"} px={6}>
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
        <Typography variant={isMobile ? "p4-bold" : "h6-bold"}>{t("mainDescription")}</Typography>
      </Stack>
      <Stack
        sx={{
          width: "100%",
          mt: 10,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 10,
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
            condition={feature.condition}
          />
        ))}
      </Stack>
      <CalculatorSection />
    </Stack>
  );
};

export default InvestmentPlansSections;
