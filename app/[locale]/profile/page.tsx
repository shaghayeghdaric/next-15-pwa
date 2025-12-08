"use client";

import { Stack } from "@mui/material";
// import ProfileCard from "./_components/ProfileCard";
import ValueCard from "./_components/ValueCard";
import { useIsMobile } from "@/hooks/use-responsive";

const values = [
  { title: "DAYS ACTIVE", value: "73" },
  { title: "SUCCESS RATE", value: "94.7%" },
  { title: "PORTFOLIO VALUE", value: "$12,847" },
];

const ProfilePage = () => {
  const isMobile = useIsMobile();
  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      sx={{ width: "100%", mt: { xs: 4, md: 14 }, gap: { xs: 4, md: 16 } }}
    >
      {values.map((item) => (
        <ValueCard key={item.title} title={item.title} value={item.value} />
      ))}
    </Stack>
  );
};

export default ProfilePage;
