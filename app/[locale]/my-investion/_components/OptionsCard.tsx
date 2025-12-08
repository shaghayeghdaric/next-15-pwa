import { useIsMobile } from "@/hooks/use-responsive";
import { Stack, Typography } from "@mui/material";

const OptionsCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  const isMobile = useIsMobile();
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      sx={{
        p: 4,
        borderRadius: 1,
        backgroundColor: "rgba(0, 165, 232, 0.2)",
        width: "100%",
      }}
    >
      <img src={icon} alt={title} />
      <Typography variant={isMobile ? "p4-bold" : "p1-bold"} color="primary.main" sx={{ whiteSpace: "nowrap" }}>
        {description}
      </Typography>
      <Typography variant={isMobile ? "p4-regular" : "p2-regular"} sx={{ whiteSpace: "nowrap" }}>
        {title}
      </Typography>
    </Stack>
  );
};

export default OptionsCard;
