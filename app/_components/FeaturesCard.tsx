import { useIsMobile } from "@/hooks/use-responsive";
import { Box, Stack, Typography } from "@mui/material";
import type { FC } from "react";

interface FeaturesCardProps {
  logo: string;
  title: string;
  description: string;
  items: string[];
}

const FeaturesCard: FC<FeaturesCardProps> = ({ logo, title, description, items }) => {
  const isMobile = useIsMobile();

  return (
    <Stack
      sx={{
        padding: 6,
        gap: { xs: 2, md: 4 },
        background: "linear-gradient(135deg, rgba(0, 165, 232, 0.5), rgba(6, 57, 77, 0.5))",
        borderRadius: 2,
      }}
    >
      <Stack
        sx={{
          gap: 4,
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <img src={logo} alt={title} width={48} height={48} />
        <Typography variant={isMobile ? "p3-bold" : "h6-bold"} color="primary.main" sx={{ lineHeight: "20px" }}>
          {title}
        </Typography>
      </Stack>
      <Stack sx={{ gap: 1 }}>
        <Typography variant={isMobile ? "p4-regular" : "p2-regular"}>{description}</Typography>
      </Stack>
      <Stack sx={{ gap: 1, mt: 2 }}>
        {items.map((item, index) => (
          <Stack key={`feature-item-${index}-${item}`} sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            />
            <Typography variant={isMobile ? "p4-light" : "p2-light"}>{item}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default FeaturesCard;
