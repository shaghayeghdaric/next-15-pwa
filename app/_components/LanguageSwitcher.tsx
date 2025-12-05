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
    if (newLocale === locale) {
      handleClose();
      return;
    }

    router.replace(pathname, { locale: newLocale });
    handleClose();
  };
  return (
    <>
      <Button
        variant="outlined"
        color="info"
        onClick={handleClick}
        sx={{ fontSize: { xs: 10, md: 12, lg: 14 }, p: { xs: 1, md: 3, lg: 4 } }}
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
        <MenuItem onClick={() => handleLanguageChange("en")} selected={locale === "en"}>
          English
        </MenuItem>
        <MenuItem onClick={() => handleLanguageChange("ar")} selected={locale === "ar"}>
          العربية
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
