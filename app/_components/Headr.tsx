"use client";

import { Button, Stack } from "@mui/material";
import Image from "@/components/Image";

const Header: React.FC = () => {
  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
        py: 4,
      }}
    >
      <Image
        src="/images/logo/finova-blue.png"
        alt="Logo"
        width={121}
        height={18}
      />
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          flexDirection: "row",
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            flexDirection: "row",
          }}
        >
          <Button variant="outlined" color="info">
            INVESTMENTS
          </Button>
          <Button variant="outlined" color="info">
            PAYMENT
          </Button>
          <Button variant="outlined" color="info">
            SIGNALS
          </Button>
          <Button variant="outlined" color="info">
            EDUCATION
          </Button>
        </Stack>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            flexDirection: "row",
          }}
        >
          <Button variant="outlined" color="info">
            SIGN IN
          </Button>
          <Button variant="contained" color="info">
            SIGN UP
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
