"use client";

import { Button, Stack } from "@mui/material";
import Image from "@/components/Image";
// import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Header: React.FC = () => {
  // const t = useTranslations("navigation");

  // Temporary hardcoded text to test if the basic setup works
  const nav = {
    investments: "INVESTMENTS",
    payment: "PAYMENT",
    signals: "SIGNALS",
    education: "EDUCATION",
    signIn: "SIGN IN",
    signUp: "SIGN UP",
  };

  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
        pt: 34,
        px: 23,
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
            {nav.investments}
          </Button>
          <Button variant="outlined" color="info">
            {nav.payment}
          </Button>
          <Button variant="outlined" color="info">
            {nav.signals}
          </Button>
          <Button variant="outlined" color="info">
            {nav.education}
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
          <LanguageSwitcher />
          <Button variant="outlined" color="info">
            {nav.signIn}
          </Button>
          <Button variant="contained" color="info">
            {nav.signUp}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
