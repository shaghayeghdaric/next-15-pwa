import { Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import LearningCard from "./_components/LearningCard";

const Learn = () => {
  const t = useTranslations("educationHub");
  const learningJourneys = [
    {
      icon: "/images/icons/education/beginner.svg",
      level: t("beginner.title"),
      title: "INTRODUCTION TO CRYPTOCURRENCY",
      hour: 1.5,
      complete: 75,
      description: "LEARN THE FUNDAMENTALS OF CRYPTOCURRENCY, BLOCKCHAIN TECHNOLOGY, AND HOW DIGITAL ASSETS WORK.",
    },
    {
      icon: "/images/icons/education/intermediate.svg",
      level: t("intermediate.title"),
      title: "WALLET SECURITY BASICS",
      hour: 1.5,
      complete: 50,
      description: "MASTER THE ESSENTIAL SECURITY PRACTICES FOR PROTECTING YOUR CRYPTOCURRENCY INVESTMENTS.",
    },
    {
      icon: "/images/icons/education/advanced.svg",
      level: t("advanced.title"),
      title: "TRADING FUNDAMENTALS",
      hour: 1.5,
      complete: 100,
      description: "LEARN BASIC TRADING CONCEPTS, MARKET ANALYSIS, AND HOW TO MAKE YOUR FIRST TRADES SAFELY.",
    },
    {
      icon: "/images/icons/education/expert.svg",
      level: t("expert.title"),
      title: "INVESTMENT STRATEGIES",
      hour: 1.5,
      complete: 0,
      description: "DISCOVER DIFFERENT INVESTMENT APPROACHES AND BUILD A DIVERSIFIED CRYPTO PORTFOLIO.",
    },
  ];
  return (
    <Stack justifyContent={"start"} alignItems={"start"} gap={7}>
      <Typography variant="h1-bold">CRYPTO LEARNING HUB</Typography>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 18,
          "@media (max-width: 900px)": {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
          "@media (max-width: 600px)": {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        {learningJourneys.map((journey, index) => (
          <Stack key={`learning-journey-${index}-${journey.title}`} gap={5}>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                width: 200,
                p: 4,
                borderRadius: 1,
                backgroundColor: "secondary.main",
              }}
            >
              <Typography variant="h3-bold" color="primary.main">
                {journey.level}
              </Typography>
            </Stack>
            <LearningCard key={`learning-journey-card-${index}-${journey.title}`} {...journey} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Learn;
