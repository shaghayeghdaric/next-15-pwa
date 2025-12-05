"use client";

import { useIsMobile } from "@/hooks/use-responsive";
import { Button, Stack, Typography } from "@mui/material";
import type { FC } from "react";

export interface PlanCardProps {
  title: string;
  price: number;
  features: string[];
  per: string;
  buttonName: string;
  isMostPopular: boolean;
}

const PlanCard: FC<PlanCardProps> = ({ title, price, features, per, buttonName, isMostPopular }) => {
  const isMobile = useIsMobile();
  return (
    <Stack
      flexDirection={"column"}
      justifyContent={isMobile ? "space-between" : "center"}
      alignItems={"center"}
      sx={{
        width: { xs: "100%", md: "auto" },
        py: { xs: 3, md: 6 },
        px: { xs: 3, lg: 10 },
        gap: { xs: 2, md: 4 },
        borderRadius: 1,
        background:
          "linear-gradient(180deg, rgba(0, 27, 53, 0.71) 2.4%, rgba(153, 185, 216, 0.71) 50.48%, rgba(0, 34, 67, 0.71) 100%);",
      }}
    >
      <Stack flexDirection="column" justifyContent={"center"} alignItems={"center"} sx={{ gap: { xs: 2, md: 4 } }}>
        {isMostPopular && (
          <Typography variant={isMobile ? "p2-bold" : "h6-bold"} color="primary.main">
            MOST POPULAR
          </Typography>
        )}
        <Typography variant={isMobile ? "p2-bold" : "h6-bold"} color="white">
          {title}
        </Typography>
        <Typography variant={isMobile ? "p2-bold" : "h6-bold"} color="primary.main">
          ${price}
        </Typography>
        <Typography variant={isMobile ? "p4-medium" : "p1-medium"} color="white">
          {per}
        </Typography>
      </Stack>
      <Stack
        flexDirection={isMobile ? "row" : "column"}
        justifyContent={isMobile ? "space-between" : "center"}
        alignItems={"center"}
        sx={{ width: "100%", gap: { xs: 2, md: 4 } }}
      >
        <Stack>
          {features.map((feature, index) => (
            <Typography
              key={`plan-feature-${index}-${feature}`}
              variant={isMobile ? "p4-light" : "p1-light"}
              color="white"
              sx={{
                textAlign: "start",
                lineHeight: "24px",
                whiteSpace: "nowrap",
              }}
            >
              {feature}
            </Typography>
          ))}
        </Stack>
        <Button variant={"contained"} color={isMostPopular ? "primary" : "secondary"} sx={{ mt: 4 }}>
          {buttonName}
        </Button>
      </Stack>
    </Stack>
  );
};

export default PlanCard;
