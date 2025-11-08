import { Stack, Typography } from "@mui/material";
import ProfileCard from "./_components/ProfileCard";
import ValueCard from "./_components/ValueCard";

const values = [
  { title: "DAYS ACTIVE", value: "73" },
  { title: "SUCCESS RATE", value: "94.7%" },
  { title: "PORTFOLIO VALUE", value: "$12,847" },
];

const SidebarMenuItems = [
  { label: "PERSONAL INFORMATION", href: "/profile" },
  { label: "SECURITY SETTINGS", href: "/profile/settings" },
  { label: "PAYMENT METHODS", href: "/profile/payment-methods" },
  { label: "TRADING HISTORY", href: "/profile/trading-history" },
  { label: "NOTIFICATION SETTINGS", href: "/profile/settings" },
  { label: "HELP & SUPPORT", href: "/profile/help-and-support" },
  { label: "TERMS & PRIVACY", href: "/profile/terms-and-privacy" },
];
const ProfilePage = () => {
  return (
    <Stack justifyContent={"start"} alignItems={"start"} gap={10}>
      <Typography variant="h1-bold">My Profile</Typography>

      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"start"}
        gap={12}
      >
        <Stack
          justifyContent={"start"}
          alignItems={"start"}
          sx={{ width: "100%", gap: 6 }}
        >
          <ProfileCard />
          <Stack direction={"row"} gap={16} sx={{ width: "100%", mt: 26 }}>
            {values.map((item) => (
              <ValueCard
                key={item.title}
                title={item.title}
                value={item.value}
              />
            ))}
          </Stack>
        </Stack>
        <Stack gap={8}>
          {SidebarMenuItems.map((item) => (
            <Typography
              key={item.label}
              variant="h4-regular"
              sx={{ whiteSpace: "nowrap" }}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfilePage;
