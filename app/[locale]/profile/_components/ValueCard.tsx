"use client";
import { useIsMobile } from "@/hooks/use-responsive";
import { Stack, Typography } from "@mui/material";

const ValueCard = ({ title, value }: { title: string; value: string }) => {
  const isMobile = useIsMobile();

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        py: { xs: 3, md: 6 },
        px: { xs: 6, md: 12 },
        gap: { xs: 3, md: 5 },
        borderRadius: 1,
        backgroundColor: "rgba(0, 165, 232, 0.2)",
        width: "100%",
      }}
    >
      <Typography variant={isMobile ? "p2-bold" : "h6-bold"} sx={{ whiteSpace: "nowrap" }}>
        {value}
      </Typography>
      <Typography variant={isMobile ? "p2-regular" : "h6-regular"} sx={{ whiteSpace: "nowrap" }}>
        {title}
      </Typography>
    </Stack>
  );
};

export default ValueCard;
