import { Stack, Typography } from "@mui/material";

const ProfileCard = () => {
  return (
    <Stack
      direction={"row"}
      gap={20}
      alignItems={"center"}
      sx={{
        py: 6,
        px: 12,
        borderRadius: 1,
        backgroundColor: "rgba(0, 165, 232, 0.2)",
        width: "100%",
      }}
    >
      <img src={"/images/profile.png"} width={"75px"} height={"75px"} alt="Profile" />
      <Stack alignItems={"start"} justifyContent={"start"} gap={4}>
        <Typography variant="h1-bold" color="primary.main">
          MARY HGSH
        </Typography>
        <Typography variant="h4-regular">mary@example.com</Typography>
      </Stack>
    </Stack>
  );
};

export default ProfileCard;
