import { Stack, Typography } from "@mui/material";
import type { FC } from "react";

interface LearningCardProps {
  icon: string;
  level: string;
  title: string;
  hour: number;
  complete: number;
  description: string;
}

const LearningCard: FC<LearningCardProps> = ({
  // icon,
  // level,
  title,
  hour,
  complete,
  description,
}) => {
  return (
    <Stack
      justifyContent={"space-between"}
      alignItems={"start"}
      gap={7}
      sx={{
        padding: 7,
        borderRadius: 1,
        backgroundColor: "rgba(0, 165, 232, 0.2)",
        width: "100%",
        height: "288px",
      }}
    >
      <Stack justifyContent={"start"} alignItems={"start"} gap={7}>
        <Typography variant="h2-bold" color="primary.main">
          {title}
        </Typography>
        <Typography variant="h4-medium">{description}</Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} gap={2} width={"100%"}>
        <Typography variant="h4-medium">{hour} hours</Typography>
        <Typography variant="h4-medium">{complete}% complete</Typography>
      </Stack>
    </Stack>
  );
};

export default LearningCard;
