"use client";

import { Stack, Typography } from "@mui/material";
import Image from "@/components/Image";
import { useTranslations } from "next-intl";
import { useIsMobile } from "@/hooks/use-responsive";

const HeroSection: React.FC = () => {
  const t = useTranslations("hero");
  const isMobile = useIsMobile();

  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: { xs: 310, sm: 500, md: 400, lg: 550, xl: 590 },
        position: "relative",
        py: { xs: 8, md: 20 },
        px: { xs: 2, md: 5 },
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          opacity: 0.54,
        }}
      >
        <Image src="/images/wave.png" alt="Hero Wave Background" fluid={true} aspectWidth={1101} aspectHeight={590} />
      </Stack>
      <Stack
        sx={{
          position: "absolute",
          top: 110,
          right: 90,
          width: "35%",
          height: "35%",
          zIndex: 0,
        }}
      >
        <Image
          src="/images/planet.png"
          alt="Hero Planet Background"
          fluid={true}
          aspectWidth={434}
          aspectHeight={442}
        />
      </Stack>

      <Stack
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          width: { xs: "100%", md: "60%" },
          justifyContent: "left",
          alignItems: "flex-start",
          gap: { xs: 5, md: 15 },
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          <Typography
            variant={isMobile ? "h4-bold" : "h1-bold"}
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            {t("smartMoney")}
          </Typography>
          <Typography
            variant={isMobile ? "h6-bold" : "h3-bold"}
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            {t("rightInYourPocket")}
          </Typography>
        </Stack>
        <Typography variant={isMobile ? "p4-bold" : "h6-bold"}>{t("description")}</Typography>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
