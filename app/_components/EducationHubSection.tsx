import { Box, Stack, Typography } from "@mui/material";
import LearningCard from "./LearningCard";
import LearningFeature from "./LearningFeature";

const learningJourneys = [
  {
    icon: "/images/icons/education/beginner.svg",
    title: "BEGINNER",
    complete: "8/12 COMPLETE",
    description:
      "LEARN CRYPTO BASICS, WALLET SECURITY, AND FUNDAMENTAL ANALYSIS",
  },
  {
    icon: "/images/icons/education/intermediate.svg",
    title: "INTERMEDIATE",
    complete: "3/10 COMPLETE",
    description: "TECHNICAL ANALYSIS, TRADING STRATEGIES, AND RISK MANAGEMENT",
  },
  {
    icon: "/images/icons/education/advanced.svg",
    title: "ADVANCED",
    complete: "0/8 COMPLETE",
    description:
      "ADVANCED STRATEGIES, PORTFOLIO MANAGEMENT, AND MARKET PSYCHOLOGY",
  },
  {
    icon: "/images/icons/education/expert.svg",
    title: "EXPERT",
    complete: "UNLOCKED AT 80%",
    description:
      "PROFESSIONAL TRADING, DeFi STRATEGIES, AND BLOCKCHAIN DEVELOPMENT",
  },
];

const learningFeatures = [
  {
    icon: "/images/icons/education/structured-learning.svg",
    title: "STRUCTURED LEARNING PATHS",
    description:
      "FOLLOW CAREFULLY DESIGNED CURRICULUMS THAT BUILD KNOWLEDGE PROGRESSIVELY FROM BASICS TO ADVANCED CONCEPTS.",
  },
  {
    icon: "/images/icons/education/interactive-video.svg",
    title: "INTERACTIVE VIDEO CONTENT",
    description:
      "LEARN THROUGH HIGH-QUALITY VIDEO LESSONS, TUTORIALS, AND REAL-WORLD CASE STUDIES FROM INDUSTRY EXPERTS.",
  },
  {
    icon: "/images/icons/education/progress-tracking.svg",
    title: "PROGRESS TRACKING",
    description:
      "MONITOR YOUR LEARNING PROGRESS WITH DETAILED ANALYTICS, QUIZZES, AND MILESTONE ACHIEVEMENTS.",
  },
  {
    icon: "/images/icons/education/certificates-badges.svg",
    title: "CERTIFICATES & BADGES",
    description:
      "EARN VERIFIED CERTIFICATES AND SKILL BADGES THAT DEMONSTRATE YOUR CRYPTO TRADING EXPERTISE.",
  },
  {
    icon: "/images/icons/education/expert-mentorship.svg",
    title: "EXPERT MENTORSHIP",
    description:
      "GET GUIDANCE FROM PROFESSIONAL TRADERS AND CRYPTO EXPERTS THROUGH LIVE SESSIONS AND Q&A.",
  },
  {
    icon: "/images/icons/education/community-learning.svg",
    title: "COMMUNITY LEARNING",
    description:
      "CONNECT WITH FELLOW LEARNERS, SHARE STRATEGIES, AND LEARN FROM THE EXPERIENCES OF SUCCESSFUL TRADERS.",
  },
];

const EducationHubSection = () => {
  return (
    <Stack justifyContent={"center"} alignItems="center" py={7} gap={10}>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", gap: 4, mb: 10, px: 6 }}
      >
        <Typography variant="h6-medium" sx={{ whiteSpace: "nowrap" }}>
          EDUCATION HUB
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
            MASTER CRYPTO
          </Typography>
          <Typography
            sx={{
              fontSize: "27px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            TRADING & INVESTMENT
          </Typography>
        </Stack>
        <Typography variant="h4-regular">
          OUR COMPREHENSIVE EDUCATION PLATFORM TAKES YOU FROM BEGINNER TO EXPERT
          WITH STRUCTURED LEARNING PATHS, PRACTICAL EXERCISES, AND EXPERT
          MENTORSHIP.
        </Typography>
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
          <Typography variant="h3-bold">YOUR LEARNING JOURNEY</Typography>
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
