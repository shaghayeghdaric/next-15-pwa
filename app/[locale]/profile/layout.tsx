"use client";

import { Stack, Typography, Collapse, IconButton } from "@mui/material";
import ProfileCard from "./_components/ProfileCard";
import { useIsMobile } from "@/hooks/use-responsive";
import useToggleState from "@/hooks/use-toggleState";
import { Icon } from "@/components/icons";

const SidebarMenuItems = [
  { label: "PERSONAL INFORMATION", href: "/profile" },
  { label: "SECURITY SETTINGS", href: "/profile/security-settings" },
  { label: "TRADING HISTORY", href: "/profile/trading-history" },
  { label: "NOTIFICATION SETTINGS", href: "/profile/notification-settings" },
  { label: "HELP & SUPPORT", href: "/profile/help-and-support" },
  { label: "TERMS & PRIVACY", href: "/profile/terms-and-privacy" },
  { label: "SIGN OUT", href: null },
];

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  const [isMenuOpen, toggleMenuOpen] = useToggleState(false);

  return (
    <Stack justifyContent={"start"} alignItems={"start"} sx={{ width: "100%", gap: { xs: 5, md: 10 } }}>
      <Typography variant={isMobile ? "h4-bold" : "h1-bold"}>My Profile</Typography>

      <Stack
        direction={isMobile ? "column-reverse" : "row"}
        justifyContent={"space-between"}
        alignItems={"start"}
        sx={{ width: "100%", gap: { xs: 5, md: 10 } }}
      >
        <Stack justifyContent={"start"} alignItems={"start"} sx={{ width: "100%", gap: 6 }}>
          <ProfileCard />
          {children}
        </Stack>
        {isMobile ? (
          <Stack sx={{ width: "100%", gap: 2 }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" onClick={toggleMenuOpen}>
              <Typography variant="p1-bold">Menu</Typography>
              <IconButton>
                {isMenuOpen ? (
                  <Icon name="ArrowUpoutlined" fillColor="white" size={16} />
                ) : (
                  <Icon name="ArrowDownoutlined" fillColor="white" size={16} />
                )}
              </IconButton>
            </Stack>
            <Collapse in={isMenuOpen} unmountOnExit>
              <Stack sx={{ gap: 2, width: "100%" }}>
                {SidebarMenuItems.map((item) => (
                  <Stack
                    key={item.label}
                    sx={{
                      width: "100%",
                      borderRadius: 1,
                      p: 3,
                      backgroundColor: "rgba(0, 165, 232, 0.2)",
                    }}
                  >
                    <Typography key={item.label} variant="p4-regular" sx={{ whiteSpace: "nowrap" }}>
                      {item.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Collapse>
          </Stack>
        ) : (
          <Stack
            sx={{
              gap: { md: 8 },
              width: "100%",
            }}
          >
            {SidebarMenuItems.map((item) => (
              <Stack
                key={item.label}
                sx={{
                  width: "100%",
                  borderRadius: 1,
                  p: 0,
                  backgroundColor: "transparent",
                }}
              >
                <Typography key={item.label} variant="p1-regular" sx={{ whiteSpace: "nowrap" }}>
                  {item.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default ProfileLayout;
