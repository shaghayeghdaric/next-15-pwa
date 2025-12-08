import { useIsMobile } from "@/hooks/use-responsive";
import { Box, Stack, Typography } from "@mui/material";

const LearningFeature = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  const isMobile = useIsMobile();

  return (
    <Stack direction={"row"} alignItems="flex-start" gap={4}>
      <img src={icon} alt={title} width={39} height={39} />
      <Stack gap={1}>
        <Typography variant={isMobile ? "p2-medium" : "h6-medium"} fontWeight={600}>
          {title}
        </Typography>
        <Typography variant={isMobile ? "p3-light" : "p1-light"} color="textSecondary">
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LearningFeature;
