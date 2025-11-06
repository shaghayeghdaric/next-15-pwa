import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface PlanCardProps {
  title: string;
  price: number;
  features: string[];
  per: string;
  buttonName: string;
  isMostPopular: boolean;
}

const PlanCard: FC<PlanCardProps> = ({
  title,
  price,
  features,
  per,
  buttonName,
  isMostPopular,
}) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
      sx={{
        py: 6,
        px: 10,
        borderRadius: 1,
        background:
          "linear-gradient(180deg, rgba(0, 27, 53, 0.71) 2.4%, rgba(153, 185, 216, 0.71) 50.48%, rgba(0, 34, 67, 0.71) 100%);",
      }}
    >
      {isMostPopular && (
        <Typography variant="h3-bold" color="primary.main">
          MOST POPULAR
        </Typography>
      )}
      <Typography variant="h3-bold" color="white">
        {title}
      </Typography>
      <Typography variant="h3-bold" color="primary.main">
        ${price}
      </Typography>
      <Typography variant="h4-medium" color="white">
        {per}
      </Typography>
      <Stack sx={{ width: "100%" }}>
        {features.map((feature, index) => (
          <Typography
            key={`plan-feature-${index}-${feature}`}
            variant="h4-light"
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
      <Button
        variant={"contained"}
        color={isMostPopular ? "primary" : "secondary"}
        sx={{ fontWeight: 700, fontSize: "12px", mt: 4 }}
      >
        {buttonName}
      </Button>
    </Stack>
  );
};

export default PlanCard;
