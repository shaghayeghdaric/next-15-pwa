import PortfolioChart from "@/components/PortfolioChart";
import { useIsMobile } from "@/hooks/use-responsive";
import { Paper, Stack, Typography } from "@mui/material";

const PortfolioPerformance = () => {
  const isMobile = useIsMobile();

  return (
    <Stack sx={{ width: "100%", gap: 4 }}>
      <Typography variant={isMobile ? "p4-medium" : "p1-medium"}>PORTFOLIO PERFORMANCE</Typography>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant={isMobile ? "p4-bold" : "h6-bold"} sx={{ mb: 3 }}>
          Total Portfolio Value
        </Typography>
        <PortfolioChart height={400} chartType="area" showProfit={true} />
      </Paper>
    </Stack>
  );
};

export default PortfolioPerformance;
