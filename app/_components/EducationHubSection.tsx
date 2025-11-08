import { Box, Stack, Typography } from "@mui/material";
import LearningCard from "./LearningCard";
import LearningFeature from "./LearningFeature";
import { useTranslations } from "next-intl";

const EducationHubSection = () => {
  const t = useTranslations("educationHub");

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
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
          sx={{
            borderRadius: 1,
            backgroundColor: "rgba(0, 165, 232, 0.2)",
            padding: 5,
            width: "50%",
          }}
        >
          <Typography variant="h3-bold">{t("yourLearningJourney")}</Typography>
          <Stack justifyContent={"center"} gap={10}>
            {learningJourneys.map((journey, index) => (
              <LearningCard
                key={`journey-${index}-${journey.title}`}
                {...journey}
              />
            ))}
          </Stack>
        </Stack>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          gap={8}
          sx={{ p: 5, width: "50%" }}
        >
          {learningFeatures.map((feature, index) => (
            <LearningFeature
              key={`feature-${index}-${feature.title}`}
              {...feature}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default EducationHubSection;
