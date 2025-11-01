import { Box, Button, Stack, Typography } from "@mui/material";
import type { FC } from "react";

interface InvestmentTypesCardProps {
  logo: string;
  title: string;
  description: string;
  items: string[];
  percent: string;
  returnType: string;
  buttonName: string;
  modalKey: string;
}

const InvestmentTypesCard: FC<InvestmentTypesCardProps> = ({
  logo,
  title,
  description,
  items,
  percent,
  returnType,
  buttonName,
  modalKey,
}) => {
  return (
    <Stack
      sx={{
        padding: 6,
        gap: 6,
        background:
          "linear-gradient(135deg, rgba(0, 165, 232, 0.5), rgba(6, 57, 77, 0.5))",
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
        <Typography
          variant="h3-bold"
          color="primary.main"
          sx={{ lineHeight: "20px" }}
        >
          {title}
        </Typography>
      </Stack>
      <Stack sx={{ gap: 1 }}>
        <Typography variant="h5-regular">{description}</Typography>
      </Stack>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          backgroundColor: "primary.main",
          borderRadius: 1,
          padding: 2,
        }}
      >
        <Typography color="black" variant="h1-bold">
          {percent}
        </Typography>
        <Typography color="black" variant="h4-regular" sx={{ ml: 2 }}>
          {returnType}
        </Typography>
      </Stack>
      <Stack sx={{ gap: 1, mt: 2 }}>
        {items.map((item, index) => (
          <Stack
            key={`feature-item-${index}-${item}`}
            sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}
          >
            <Box
              sx={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            />
            <Typography variant="h5-light">{item}</Typography>
          </Stack>
        ))}
      </Stack>
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontWeight: 600,
          fontSize: "12px",
          alignSelf: "center",
        }}
      >
        {buttonName}
      </Button>
    </Stack>
  );
};

export default InvestmentTypesCard;
