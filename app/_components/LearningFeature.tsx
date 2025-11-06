import { Box, Stack, Typography } from "@mui/material";

const LearningFeature = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <Stack direction={"row"} alignItems="flex-start" gap={4}>
      <img src={icon} alt={title} width={39} height={39} />
      <Stack gap={1}>
        <Typography variant="h3-medium" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="h4-light" color="textSecondary">
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LearningFeature;
