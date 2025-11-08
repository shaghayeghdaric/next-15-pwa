import { Box, Stack, Typography } from "@mui/material";
import FeaturesCard from "./FeaturesCard";
import { useTranslations } from "next-intl";

const FeaturesSections = () => {
  const t = useTranslations("features");

  const features = [
    {
      logo: "/images/icons/ai-powered-trading-signals.svg",
      title: t("aiTradingSignals.title"),
      description: t("aiTradingSignals.description"),
      items: t.raw("aiTradingSignals.features"),
    },
    {
      logo: "/images/icons/guaranteed-investment-returns.svg",
      title: t("guaranteedReturns.title"),
      description: t("guaranteedReturns.description"),
      items: t.raw("guaranteedReturns.features"),
    },
    {
      logo: "/images/icons/complete-crypto-education.svg",
      title: t("cryptoEducation.title"),
      description: t("cryptoEducation.description"),
      items: t.raw("cryptoEducation.features"),
    },
    {
      logo: "/images/icons/bank-grade-security.svg",
      title: t("bankSecurity.title"),
      description: t("bankSecurity.description"),
      items: t.raw("bankSecurity.features"),
    },
    {
      logo: "/images/icons/mobile-first-experience.svg",
      title: t("mobileFirst.title"),
      description: t("mobileFirst.description"),
      items: t.raw("mobileFirst.features"),
    },
    {
      logo: "/images/icons/global-comunity.svg",
      title: t("globalCommunity.title"),
      description: t("globalCommunity.description"),
      items: t.raw("globalCommunity.features"),
    },
  ];
  return (
    <Stack justifyContent={"center"} alignItems="center" py={7}>
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
          <FeaturesCard
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
