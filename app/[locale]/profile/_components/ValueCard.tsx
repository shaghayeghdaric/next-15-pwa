import { Stack, Typography } from "@mui/material";

const ValueCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      gap={5}
      sx={{
        py: 6,
        px: 10,
        borderRadius: 1,
        backgroundColor: "rgba(0, 165, 232, 0.2)",
        width: "100%",
      }}
    >
      <Typography variant="h4-bold" sx={{ whiteSpace: "nowrap" }}>
        {value}
      </Typography>
      <Typography variant="h4-regular" sx={{ whiteSpace: "nowrap" }}>
        {title}
      </Typography>
    </Stack>
  );
};

export default ValueCard;
