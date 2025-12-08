import { useIsMobile } from "@/hooks/use-responsive";
import { Stack, Typography } from "@mui/material";

const BlockChainCard = ({ icon, name }: { icon: string; name: string }) => {
  const isMobile = useIsMobile();

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
      sx={{
        textAlign: "center",
        py: 3,
        px: 2,
        borderRadius: 1,
        background:
          "linear-gradient(180deg, rgba(0, 27, 53, 0.71) 2.4%, rgba(153, 185, 216, 0.71) 50.48%, rgba(0, 34, 67, 0.71) 100%)",
      }}
    >
      <img src={icon} alt={name} width={55} height={55} />
      <Typography variant={isMobile ? "p4-bold" : "p1-bold"}>{name}</Typography>
    </Stack>
  );
};
export default BlockChainCard;
