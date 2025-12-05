"use client";

import { Button, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import Image from "@/components/Image";
// import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { Icon } from "@/components/icons";
import { useCallback, useMemo, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import { useRouter } from "next/navigation";

const NAV_LABELS = {
  investments: "INVESTMENTS",
  payment: "PAYMENT",
  signals: "SIGNALS",
  education: "EDUCATION",
  signIn: "SIGN IN",
  signUp: "SIGN UP",
} as const;

const Header: React.FC = () => {
  // const t = useTranslations("navigation");
  const pathname = usePathname();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget), []);
  const handleClose = useCallback(() => setAnchorEl(null), []);
  const handlePushMobile = useCallback((path: string) => {
    router.push(path);
    handleClose();
  }, []);

  // Desktop primary actions with navigation paths
  const primaryActions = useMemo(
    () => [
      { label: NAV_LABELS.investments, path: "/investments" },
      { label: NAV_LABELS.payment, path: "/payment" },
      { label: NAV_LABELS.signals, path: "/signals" },
      { label: NAV_LABELS.education, path: "/learn" },
    ],
    []
  );
  // Desktop secondary actions with navigation paths
  const secondaryActions = useMemo(
    () => [
      { label: NAV_LABELS.signIn, path: "/signin" },
      { label: NAV_LABELS.signUp, path: "/signup" },
    ],
    []
  );

  // Mobile menu: include Home + all primary and secondary actions
  const mobileMenu = useMemo(() => [...primaryActions, ...secondaryActions], [primaryActions, secondaryActions]);

  return (
    <>
      <Stack
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          flexDirection: "row",

          pt: { md: 10, lg: 34 },
          px: { md: 10, lg: 23 },
          display: { xs: "none", md: "flex" },
        }}
      >
        <Image src="/images/logo/finova-blue.png" alt="Logo" width={121} height={18} />
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: { md: 6, lg: 12 },
            flexDirection: "row",
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center", gap: { md: 2, lg: 5 }, flexDirection: "row" }}>
            {primaryActions.map(({ label, path }) => (
              <Button key={path} variant="outlined" color="info" onClick={() => router.push(path)}>
                {label}
              </Button>
            ))}
          </Stack>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              gap: { md: 2, lg: 5 },
              flexDirection: "row",
            }}
          >
            <LanguageSwitcher />
            {secondaryActions.map(({ label, path }) => (
              <Button
                key={path}
                variant={label === NAV_LABELS.signUp ? "contained" : "outlined"}
                color="info"
                onClick={() => router.push(path)}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Stack
        width={"100%"}
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        px={4}
        mt={2}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <LanguageSwitcher />
        <IconButton onClick={handleClick}>
          <Icon name="Menuoutlined" fillColor="white" size={30} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{ "& .MuiMenu-list": { backgroundColor: "primary.base" } }}
        >
          {mobileMenu.map(({ path, label }) => (
            <MenuItem
              key={path}
              onClick={() => handlePushMobile(path)}
              selected={pathname === path}
              sx={{ fontSize: 12 }}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
    </>
  );
};

export default Header;
