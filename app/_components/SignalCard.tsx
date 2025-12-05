import { Box, Stack, Typography } from "@mui/material";
import type { FC } from "react";

interface SignalCardProps {
  signalName: string;
  entry: number;
  takeProfit: number;
  stopLoss: number;
  risk: number;
  status: string;
  accuracy: number;
  lastUpdated: string;
}

const SignalCard: FC<SignalCardProps> = ({
  signalName,
  entry,
  takeProfit,
  stopLoss,
  risk,
  status,
  accuracy,
  lastUpdated,
}) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      alignItems={"stretch"}
      width={"100%"}
      sx={{
        background:
          status === "Buy"
            ? "linear-gradient(89.88deg, rgba(0, 232, 73, 0.37) 37.02%, rgba(255, 255, 255, 0.37) 84.45%, rgba(255, 255, 255, 0.37) 87.94%, rgba(255, 255, 255, 0.37) 95.48%)"
            : "linear-gradient(89.88deg, rgba(171, 0, 28, 0.37) 37.02%, rgba(255, 255, 255, 0.37) 73.79%, rgba(255, 255, 255, 0.37) 87.94%, rgba(255, 255, 255, 0.37) 95.48%)",
      }}
    >
      <Box
        sx={{
          width: 6,
          alignSelf: "stretch",
          backgroundColor: status === "Buy" ? "primary.main" : "error.main",
          borderRadius: 1,
        }}
      />
      <Stack sx={{ flex: 1, width: "100%", px: 4, py: 2 }} gap={4}>
        <Stack direction={"row"} width={"100%"} justifyContent={"space-between"} alignItems={"center"} sx={{ gap: 4 }}>
          <Stack justifyContent={"start"} gap={2}>
            <Typography variant="h3-bold">{signalName}</Typography>
            <Box
              sx={{
                py: 1,
                px: 2,
                textAlign: "center",
                color: "primary.contrastText",
                borderRadius: 1,
                backgroundColor: status === "Buy" ? "primary.main" : "error.main",
              }}
            >
              {status}
            </Box>
          </Stack>
          <Stack justifyContent={"end"} gap={2}>
            <Typography variant="h4-light">{lastUpdated}</Typography>
            <Box
              sx={{
                py: 1,
                px: 2,
                color: "primary.main",
                backgroundColor: "background.dark",
                textAlign: "center",
                borderRadius: 1,
              }}
            >
              {accuracy}% Accuracy
            </Box>
          </Stack>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"} gap={12} pb={6} width={"100%"}>
          <Stack
            sx={{
              py: 1,
              px: 6,
              color: "primary.main",
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: 1,
              width: "100%",
            }}
          >
            <Typography variant="h4-regular" color="primary.dark">
              ENTRY PRICE
            </Typography>
            <Typography variant="h4-regular" color="primary.dark">
              {entry}
            </Typography>
          </Stack>
          <Stack
            sx={{
              py: 1,
              px: 6,
              color: "primary.main",
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: 1,
              width: "100%",
            }}
          >
            <Typography variant="h4-regular" color="primary.dark">
              TAKE PROFIT
            </Typography>
            <Typography variant="h4-regular" color="primary.dark">
              {takeProfit}
            </Typography>
          </Stack>
          <Stack
            sx={{
              py: 1,
              px: 6,
              color: "primary.main",
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: 1,
              width: "100%",
            }}
          >
            <Typography variant="h4-regular" color="primary.dark">
              STOP LOSS
            </Typography>
            <Typography variant="h4-regular" color="primary.dark">
              {stopLoss}
            </Typography>
          </Stack>
          <Stack
            sx={{
              py: 1,
              px: 6,
              color: "primary.main",
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: 1,
              width: "100%",
            }}
          >
            <Typography variant="h4-regular" color="primary.dark">
              RISK
            </Typography>
            <Typography variant="h4-regular" color="primary.dark">
              {risk}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SignalCard;
