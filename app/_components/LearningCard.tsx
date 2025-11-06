import { Stack, Typography } from "@mui/material";
import { FC } from "react";

interface LearningCardProps {
  icon?: string;
  title?: string;
  description?: string;
  complete: string;
}
const LearningCard: FC<LearningCardProps> = ({
  icon,
  title,
  description,
  complete,
}) => {
  return (
    <Stack
      sx={{
        padding: 2,
        gap: 6,
        borderRadius: 1,
        backgroundColor: "rgba(0, 165, 232, 0.2)",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"end"}
      >
        <Stack
          direction={"row"}
          gap={2}
          justifyContent={"center"}
          alignItems={"end"}
        >
          <img src={icon} alt={title} />
          <Typography variant="h3-bold" sx={{ lineHeight: "16px" }}>
            {title}
          </Typography>
        </Stack>
        <Typography variant="h6-regular">{complete}</Typography>
      </Stack>
      <Typography variant="h4-regular">{description}</Typography>
    </Stack>
  );
};

export default LearningCard;
