"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-responsive";

const InvestSection: React.FC = () => {
  const t = useTranslations("invest");
  const isMobile = useIsMobile();

  return (
    <Stack
      sx={{
        width: "100%",
        p: { xs: 2, md: 5 },
        alignItems: "self-start",
        justifyContent: "center",
        gap: { xs: 10, md: 15 },
        background: "url('/images/shadow.png') center/cover no-repeat",
      }}
      flexDirection={isMobile ? "column" : "row"}
    >
      <Stack sx={{ gap: { xs: 5, md: 15 }, width: { xs: "100%", md: "50%" } }}>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="p4-medium" pb={10}>
            OVER 50,000+ ACTIVE INVESTORS
          </Typography>
          <Typography
            variant={isMobile ? "h4-bold" : "h2-bold"}
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            SMART CRYPTO
          </Typography>
          <Typography variant={isMobile ? "h6-bold" : "h4-bold"}>INVESTMENT WITH GUARANTEED RETURNS</Typography>
        </Stack>
        <Stack sx={{ pt: 6, gap: { xs: 3, md: 8 }, justifyContent: "space-between" }} direction="row">
          <Stack sx={{ textAlign: "center", gap: 4 }}>
            <Typography variant={isMobile ? "p1-medium" : "h4-medium"} color="primary.main">
              95.7%
            </Typography>
            <Typography variant={isMobile ? "p3-regular" : "p1-regular"}>SIGNAL ACCURACY</Typography>
          </Stack>
          <Stack sx={{ textAlign: "center", gap: 4 }}>
            <Typography variant={isMobile ? "p1-medium" : "h4-medium"} color="primary.main">
              $2.4M+
            </Typography>
            <Typography variant={isMobile ? "p3-regular" : "p1-regular"}>INVESTOR PROFILE</Typography>
          </Stack>
          <Stack sx={{ textAlign: "center", gap: 4 }}>
            <Typography variant={isMobile ? "p1-medium" : "h4-medium"} color="primary.main">
              24.7
            </Typography>
            <Typography variant={isMobile ? "p3-regular" : "p1-regular"}>LIVE SUPPORT</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" sx={{ gap: 4 }}>
          <Button variant="contained" color="primary">
            {t("startInvesting")}
          </Button>
          <Button variant="contained" color="tertiary">
            {t("viewPlans")}
          </Button>
        </Stack>
      </Stack>
      <Stack
        sx={{
          gap: { xs: 8, md: 20 },
          width: { xs: "100%", md: "50%" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant={isMobile ? "p1-bold" : "h6-bold"}>Portfolio Performance</Typography>
        <Stack sx={{ textAlign: "center", gap: 4 }}>
          <Typography variant={isMobile ? "h6-bold" : "h4-bold"} color="primary.main">
            $24,847.50
          </Typography>
          <Typography variant={isMobile ? "p3-regular" : "p1-regular"}>+8.7% Today (+$1,983.40)</Typography>
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
              background: "linear-gradient(135deg, rgba(0, 165, 232, 0.5), rgba(6, 57, 77, 0.5))",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography variant={isMobile ? "p2-bold" : "h6-bold"}>BTC/USDT</Typography>
              <Typography variant={isMobile ? "p2-bold" : "h6-bold"} color="primary.main">
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
              <Typography variant={isMobile ? "p2-regular" : "h6-regular"} color="primary.main">
                ACTIVE SIGNAL
              </Typography>
              <Typography variant={isMobile ? "p3-regular" : "p1-regular"}>+12.4%</Typography>
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
              background: "linear-gradient(135deg, rgba(0, 165, 232, 0.5), rgba(6, 57, 77, 0.5))",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography variant={isMobile ? "p2-bold" : "h6-bold"}>BTC/USDT</Typography>
              <Typography variant={isMobile ? "p2-bold" : "h6-bold"} color="primary.main">
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
              <Typography variant={isMobile ? "p2-regular" : "h6-regular"} color="primary.main">
                ACTIVE SIGNAL
              </Typography>
              <Typography variant={isMobile ? "p3-regular" : "p1-regular"}>+12.4%</Typography>
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
              background: "linear-gradient(135deg, rgba(0, 165, 232, 0.5), rgba(6, 57, 77, 0.5))",
            }}
          >
            <Stack
              sx={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Typography variant={isMobile ? "p2-bold" : "h6-bold"}>BTC/USDT</Typography>
              <Typography variant={isMobile ? "p2-bold" : "h6-bold"} color="primary.main">
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
              <Typography variant={isMobile ? "p2-regular" : "h6-regular"} color="primary.main">
                ACTIVE SIGNAL
              </Typography>
              <Typography variant={isMobile ? "p3-regular" : "p1-regular"}>+12.4%</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default InvestSection;
