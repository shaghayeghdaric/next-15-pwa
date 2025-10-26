"use client";

import { Button, Stack, Typography } from "@mui/material";

const InvestSection: React.FC = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        p: 5,
        alignItems: "self-start",
        justifyContent: "center",
        gap: 20,
        background: "url('/images/shadow.png') center/cover no-repeat",
      }}
      flexDirection="row"
    >
      <Stack sx={{ gap: 20, width: "50%" }}>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6-medium" pb={10}>
            OVER 50,000+ ACTIVE INVESTORS
          </Typography>
          <Typography
            sx={{
              fontSize: "78px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            SMART CRYPTO
          </Typography>
          <Typography
            sx={{
              fontSize: "27px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            INVESTMENT WITH GUARANTEED RETURNS
          </Typography>
        </Stack>
        <Stack
          sx={{ pt: 6, gap: 8, justifyContent: "space-between" }}
          direction="row"
        >
          <Stack sx={{ textAlign: "center", gap: 4 }}>
            <Typography variant="h1-medium" color="primary.main">
              95.7%
            </Typography>
            <Typography variant="h5-regular">SIGNAL ACCURACY</Typography>
          </Stack>
          <Stack sx={{ textAlign: "center", gap: 4 }}>
            <Typography variant="h1-medium" color="primary.main">
              $2.4M+
            </Typography>
            <Typography variant="h5-regular">INVESTOR PROFILE</Typography>
          </Stack>
          <Stack sx={{ textAlign: "center", gap: 4 }}>
            <Typography variant="h1-medium" color="primary.main">
              24.7
            </Typography>
            <Typography variant="h5-regular">LIVE SUPPORT</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" sx={{ gap: 4, justifyContent: "space-between" }}>
          <Button variant="contained" color="primary">
            START INVESTING NOW
          </Button>
          <Button variant="contained" color="tertiary">
            START INVESTING NOW
          </Button>
        </Stack>
      </Stack>
      <Stack
        sx={{
          gap: 20,
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3-bold">Portfolio Balance</Typography>
        <Stack sx={{ textAlign: "center", gap: 4 }}>
          <Typography variant="h1-bold" color="primary.main">
            $24,847.50
          </Typography>
          <Typography variant="h3-regular">+8.7% Today (+$1,983.40)</Typography>
        </Stack>
        <Stack sx={{ gap: 3, width: "100%" }}>
          <Stack
            sx={{
              py: 2,
              px: 3,
              border: "1px solid #4F4F4F73",
              borderRadius: "5px",
              width: "100%",
              gap: 2,
              background:
                "linear-gradient(135deg, rgba(0, 165, 232, 0.5), rgba(6, 57, 77, 0.5))",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography variant="h4-bold">BTC/USDT</Typography>
              <Typography variant="h4-bold" color="primary.main">
                +$2,847
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography variant="h4-regular" color="primary.main">
                ACTIVE SIGNAL
              </Typography>
              <Typography variant="h5-regular">+12.4%</Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              py: 2,
              px: 3,
              border: "1px solid #4F4F4F73",
              borderRadius: "5px",
              width: "100%",
              gap: 2,
              background:
                "linear-gradient(135deg, rgba(0, 165, 232, 0.5), rgba(6, 57, 77, 0.5))",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography variant="h4-bold">BTC/USDT</Typography>
              <Typography variant="h4-bold" color="primary.main">
                +$2,847
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography variant="h4-regular" color="primary.main">
                ACTIVE SIGNAL
              </Typography>
              <Typography variant="h5-regular">+12.4%</Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              py: 2,
              px: 3,
              border: "1px solid #4F4F4F73",
              borderRadius: "5px",
              width: "100%",
              gap: 2,
              background:
                "linear-gradient(135deg, rgba(0, 165, 232, 0.5), rgba(6, 57, 77, 0.5))",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography variant="h4-bold">BTC/USDT</Typography>
              <Typography variant="h4-bold" color="primary.main">
                +$2,847
              </Typography>
            </Stack>
            <Stack
              sx={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography variant="h4-regular" color="primary.main">
                ACTIVE SIGNAL
              </Typography>
              <Typography variant="h5-regular">+12.4%</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default InvestSection;
