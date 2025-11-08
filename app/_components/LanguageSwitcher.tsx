"use client";

import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const LanguageSwitcher: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (newLocale: string) => {
    // Don't change if it's the same locale
    if (newLocale === locale) {
      handleClose();
      return;
    }

    console.log("Switching from", locale, "to", newLocale, "on path", pathname);

    // Use the next-intl router which handles locale switching automatically
    router.replace(pathname, { locale: newLocale });
    handleClose();
  };
  return (
    <>
      <Button
        variant="outlined"
        color="info"
        onClick={handleClick}
        sx={{ minWidth: "80px" }}
      >
        {locale.toUpperCase()}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem
          onClick={() => handleLanguageChange("en")}
          selected={locale === "en"}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => handleLanguageChange("ar")}
          selected={locale === "ar"}
        >
          العربية
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
