"use client";

import { Box, Stack, Typography } from "@mui/material";
import LearningCard from "./LearningCard";
import LearningFeature from "./LearningFeature";
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-responsive";

const EducationHubSection = () => {
  const t = useTranslations("educationHub");
  const isMobile = useIsMobile();

  const learningJourneys = [
    {
      icon: "/images/icons/education/beginner.svg",
      title: t("beginner.title"),
      complete: t("beginner.complete"),
      description: t("beginner.description"),
    },
    {
      icon: "/images/icons/education/intermediate.svg",
      title: t("intermediate.title"),
      complete: t("intermediate.complete"),
      description: t("intermediate.description"),
    },
    {
      icon: "/images/icons/education/advanced.svg",
      title: t("advanced.title"),
      complete: t("advanced.complete"),
      description: t("advanced.description"),
    },
    {
      icon: "/images/icons/education/expert.svg",
      title: t("expert.title"),
      complete: t("expert.complete"),
      description: t("expert.description"),
    },
  ];

  const learningFeatures = [
    {
      icon: "/images/icons/education/structured-learning-paths.svg",
      title: t("features.structuredLearning.title"),
      description: t("features.structuredLearning.description"),
    },
    {
      icon: "/images/icons/education/interactive-video-content.svg",
      title: t("features.interactiveVideo.title"),
      description: t("features.interactiveVideo.description"),
    },
    {
      icon: "/images/icons/education/progress-tracking.svg",
      title: t("features.progressTracking.title"),
      description: t("features.progressTracking.description"),
    },
    {
      icon: "/images/icons/education/certificates-and-badges.svg",
      title: t("features.certificates.title"),
      description: t("features.certificates.description"),
    },
    {
      icon: "/images/icons/education/expert-mentorship.svg",
      title: t("features.expertMentorship.title"),
      description: t("features.expertMentorship.description"),
    },
    {
      icon: "/images/icons/education/comunity-learning.svg",
      title: t("features.communityLearning.title"),
      description: t("features.communityLearning.description"),
    },
  ];
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
        justifyContent={"center"}
        alignItems={isMobile ? "center" : "start"}
        gap={14}
        sx={{ p: { xs: 0, md: 6 }, gap: { xs: 8, md: 4 } }}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            borderRadius: 1,
            backgroundColor: "rgba(0, 165, 232, 0.2)",
            width: { xs: "100%", md: "50%" },
            gap: 4,
            p: { xs: 2, md: 4 },
          }}
        >
          <Typography variant={isMobile ? "p2-bold" : "h6-bold"}>{t("yourLearningJourney")}</Typography>
          <Stack justifyContent={"center"} sx={{ gap: { xs: 5, md: 10 } }}>
            {learningJourneys.map((journey, index) => (
              <LearningCard key={`journey-${index}-${journey.title}`} {...journey} />
            ))}
          </Stack>
        </Stack>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: { xs: "100%", md: "50%" }, gap: { xs: 4, md: 8 }, p: { xs: 0, md: 4 } }}
        >
          {learningFeatures.map((feature, index) => (
            <LearningFeature key={`feature-${index}-${feature.title}`} {...feature} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default EducationHubSection;
