import { Stack, Typography } from "@mui/material";
import ProfileCard from "./_components/ProfileCard";

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
  return (
    <Stack justifyContent={"start"} alignItems={"start"} gap={10} width={"100%"}>
      <Typography variant="h1-bold">My Profile</Typography>

      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"start"} gap={12} width={"100%"}>
        <Stack justifyContent={"start"} alignItems={"start"} sx={{ width: "100%", gap: 6 }}>
          <ProfileCard />
          {children}
        </Stack>
        <Stack gap={8}>
          {SidebarMenuItems.map((item) => (
            <Typography key={item.label} variant="h4-regular" sx={{ whiteSpace: "nowrap" }}>
              {item.label}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfileLayout;
