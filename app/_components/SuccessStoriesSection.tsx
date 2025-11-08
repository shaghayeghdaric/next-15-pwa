import { Box, Stack, Typography } from "@mui/material";
import StoryCard, { StoryCardProps } from "./StoryCard";
import { useTranslations } from "next-intl";

const SuccessStoriesSection = () => {
  const t = useTranslations("successStories");
  const stories = t.raw("stories");
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
              fontSize: "44px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            {t("subtitle")}
          </Typography>
        </Stack>
        <Typography variant="h4-regular">{t("description")}</Typography>
      </Stack>
      <Stack direction={"row"} gap={9}>
        {stories.map((story: StoryCardProps) => (
          <StoryCard
            key={`success-story-${story.username}`}
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
