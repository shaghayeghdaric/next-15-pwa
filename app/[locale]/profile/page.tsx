import { Stack } from "@mui/material";
// import ProfileCard from "./_components/ProfileCard";
import ValueCard from "./_components/ValueCard";

const values = [
  { title: "DAYS ACTIVE", value: "73" },
  { title: "SUCCESS RATE", value: "94.7%" },
  { title: "PORTFOLIO VALUE", value: "$12,847" },
];

const ProfilePage = () => {
  return (
    <Stack direction={"row"} gap={16} sx={{ width: "100%", mt: 26 }}>
      {values.map((item) => (
        <ValueCard key={item.title} title={item.title} value={item.value} />
      ))}
    </Stack>
  );
};

export default ProfilePage;
