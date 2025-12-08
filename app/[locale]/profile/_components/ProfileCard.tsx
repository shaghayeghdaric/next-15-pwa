import { useIsMobile } from "@/hooks/use-responsive";
import { Stack, Typography } from "@mui/material";

const ProfileCard = () => {
  const isMobile = useIsMobile();

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{
        py: { xs: 3, md: 6 },
        px: { xs: 6, md: 12 },
        gap: { xs: 8, md: 20 },
        borderRadius: 1,
        backgroundColor: "rgba(0, 165, 232, 0.2)",
        width: "100%",
      }}
    >
      <img
        src={"/images/profile.png"}
        width={isMobile ? "30px" : "50px"}
        height={isMobile ? "30px" : "50px"}
        alt="Profile"
      />
      <Stack alignItems={"start"} justifyContent={"start"} gap={4}>
        <Typography variant={isMobile ? "h6-bold" : "h3-bold"} color="primary.main">
          MARY HGSH
        </Typography>
        <Typography variant={isMobile ? "p2-regular" : "h6-regular"}>mary@example.com</Typography>
      </Stack>
    </Stack>
  );
};

export default ProfileCard;
