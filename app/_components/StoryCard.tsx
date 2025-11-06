import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface StoryCardProps {
  story: string;
  title: string;
  username: string;
  logo: string;
}
const StoryCard: FC<StoryCardProps> = ({ story, title, username, logo }) => {
  return (
    <Stack
      justifyContent={"space-between"}
      sx={{
        height: "378px",
        padding: 5,
        gap: 6,
        borderRadius: 1,
        backgroundColor: "rgba(0, 165, 232, 0.2)",
      }}
    >
      <Typography variant="h6-regular">{story}</Typography>
      <Stack gap={10}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            borderRadius: "50%",
            width: 55,
            height: 55,
            background:
              "linear-gradient(180deg, #00336C 42.36%, #02264E 100%);",
            textAlign: "center",
          }}
        >
          {logo}
        </Stack>

        <Stack alignItems={"start"}>
          <Typography variant="h6-regular" sx={{ lineHeight: "16px" }}>
            {username}
          </Typography>
          <Typography variant="h6-regular" sx={{ lineHeight: "16px" }}>
            {title}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default StoryCard;
