import { useIsMobile } from "@/hooks/use-responsive";
import { Stack, Typography } from "@mui/material";
import type { FC } from "react";

interface LearningCardProps {
  icon?: string;
  title?: string;
  description?: string;
  complete: string;
}
const LearningCard: FC<LearningCardProps> = ({ icon, title, description, complete }) => {
  const isMobile = useIsMobile();

  return (
    <Stack
      sx={{
        padding: 2,
        gap: 6,
        borderRadius: 1,
        backgroundColor: "rgba(0, 165, 232, 0.2)",
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"end"}>
        <Stack direction={"row"} gap={2} justifyContent={"center"} alignItems={"end"}>
          <img src={icon} alt={title} />
          <Typography variant={isMobile ? "p2-bold" : "h6-bold"} sx={{ lineHeight: "16px" }}>
            {title}
          </Typography>
        </Stack>
        <Typography variant={isMobile ? "p4-regular" : "p3-regular"}>{complete}</Typography>
      </Stack>
      <Typography variant={isMobile ? "p2-regular" : "p1-regular"}>{description}</Typography>
    </Stack>
  );
};

export default LearningCard;
