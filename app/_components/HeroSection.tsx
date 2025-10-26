"use client";

import { Stack, Typography } from "@mui/material";
import Image from "@/components/Image";

const HeroSection: React.FC = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        minHeight: 590,
        position: "relative",
        py: 20,
        px: 5,
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
        <Image
          src="/images/wave.png"
          alt="Hero Wave Background"
          fluid={true}
          aspectWidth={1101}
          aspectHeight={590}
        />
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
          width: 2 / 3,
          justifyContent: "left",
          alignItems: "flex-start",
          gap: 15,
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
            sx={{
              fontSize: "82px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            SMART MONEY
          </Typography>
          <Typography
            sx={{
              fontSize: "51px",
              fontWeight: 700,
              lineHeight: "51px",
              whiteSpace: "nowrap",
            }}
          >
            RIGHT IN YOUR POCKET
          </Typography>
        </Stack>
        <Typography variant="h4-regular">
          JOIN THOUSANDS OF SUCCESSFUL TRADERS AND INVESTORS EARNING <br />{" "}
          CONSISTENT PROFITS THROUGH OUR AI-POWERED TRADING SIGNALS, <br />
          INVESTMENT PLANS, AND COMPREHENSIVE CRYPTO EDUCATION PLATFORM
        </Typography>
      </Stack>
    </Stack>
  );
};

export default HeroSection;
