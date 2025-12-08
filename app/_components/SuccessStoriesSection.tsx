"use client";

import { Box, Stack, Typography } from "@mui/material";
import StoryCard, { type StoryCardProps } from "./StoryCard";
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-responsive";

const SuccessStoriesSection = () => {
  const t = useTranslations("successStories");
  const stories = t.raw("stories");
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
      <Stack flexDirection={"column"} justifyContent={"center"} alignItems={"start"} sx={{ gap: { xs: 5, md: 10 } }}>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography variant={isMobile ? "h4-bold" : "h2-bold"}>{t("subtitle")}</Typography>
        </Stack>
        <Typography variant={isMobile ? "p4-regular" : "h6-regular"}>{t("description")}</Typography>
      </Stack>
      <Stack direction={isMobile ? "column" : "row"} gap={isMobile ? 5 : 10}>
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
