import { Box, Stack, Typography } from "@mui/material";
import StoryCard from "./StoryCard";

const stories = [
  {
    story:
      "CryptoInvest Pro changed my financial life. The guaranteed 5% monthly returns are real, and the trading signals have helped me make consistent profits. The education platform taught me everything I needed to know.",
    username: "Michael Rodriguez",
    title: "Software Developer, 8 months investor",
    logo: "M",
  },
  {
    story:
      "The trading signals are incredibly accurate. I've been following them for 6 months and my success rate is over 90%. The mobile app makes it so easy to stay updated and never miss an opportunity.",
    username: "Sarah Chen",
    title: "Marketing Manager, 6 months investor",
    logo: "S",
  },
  {
    story:
      "I started with the life insurance plan with just $50. After learning through their education platform, I now manage a much larger portfolio. The compound returns are building real wealth for my family.",
    username: "David Thompson",
    title: "Teacher, 1 year investor",
    logo: "D",
  },
  {
    story:
      "The security and transparency give me peace of mind. Smart contracts, insurance coverage, and 24/7 support - everything a serious investor needs. I've referred 12 friends and they're all happy.",
    username: "Lisa Park",
    title: "Financial Advisor, 10 months investor",
    logo: "L",
  },
];
const SuccessStoriesSection = () => {
  return (
    <Stack justifyContent={"center"} alignItems="center" py={7} gap={10}>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", gap: 4, mb: 10, px: 6 }}
      >
        <Typography variant="h6-medium" sx={{ whiteSpace: "nowrap" }}>
          SUCCESS STORIES
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
              fontSize: "44px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            WHAT OUR INVESTORS SAV
          </Typography>
        </Stack>
        <Typography variant="h4-regular">
          JOIN THOUSANDS OF SATISFIED INVESTORS WHO ARE ALREADY EARNING
          CONSISTENT PROFITS WITH CRYPTOINVEST PRO.
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={9}>
        {stories.map((story, index) => (
          <StoryCard
            key={`success-story-${index}-${story.username}`}
            story={story.story}
            title={story.title}
            username={story.username}
            logo={story.logo}
          />
        ))}
      </Stack>
    </Stack>
  );
};
export default SuccessStoriesSection;
