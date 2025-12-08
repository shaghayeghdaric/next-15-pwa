"use client";

import RHFAutocomplete from "@/theme/components/hook-form/rhf-autocomplete";
import { getLabel } from "@/utils/get-label";
import { Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import SignalsPieChartComponent from "@/components/SignalsPieChart";
import { useIsMobile } from "@/hooks/use-responsive";

// Sample data for the pie chart - you can modify this based on your filters
const sampleData = [
  { name: "BTC/USDT", value: 35, color: "#00A5E8" },
  { name: "ETH/USDT", value: 25, color: "#0639DD" },
  { name: "ADA/USDT", value: 20, color: "#00E676" },
  { name: "DOT/USDT", value: 15, color: "#FF6B6B" },
  { name: "Others", value: 5, color: "#4ECDC4" },
];

const riskLevels = [
  { id: 1, fa_title: "Low Risk" },
  { id: 2, fa_title: "Medium Risk" },
  { id: 3, fa_title: "High Risk" },
];

const signalTypes = [
  { id: 1, fa_title: "Buy Signal" },
  { id: 2, fa_title: "Sell Signal" },
  { id: 3, fa_title: "Hold Signal" },
];

const timeFrames = [
  { id: 1, fa_title: "1H" },
  { id: 2, fa_title: "4H" },
  { id: 3, fa_title: "1D" },
  { id: 4, fa_title: "1W" },
];

const amounts = [
  { id: 100, fa_title: "100 USDT" },
  { id: 500, fa_title: "500 USDT" },
  { id: 1000, fa_title: "1000 USDT" },
  { id: 5000, fa_title: "5000 USDT" },
  { id: 10000, fa_title: "10000 USDT" },
];

type Option = {
  id: number;
  fa_title: string;
};

const SignalsPieChart = () => {
  const isMobile = useIsMobile();
  const methods = useForm();
  const { setValue, watch } = methods;
  const selectedAmountId = watch("amount");
  const selectedRiskId = watch("risk");
  const selectedSignalId = watch("signal");
  const selectedTimeId = watch("time");

  // You can modify this data based on the selected filters
  const getFilteredData = () => {
    // This is where you would implement your filtering logic
    // For now, returning static data
    return sampleData;
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"} sx={{ width: "100%" }} gap={4}>
      {/* Filters Section */}
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        sx={{
          backgroundColor: "rgba(0, 165, 232, 0.2)",
          borderRadius: 1,
          width: "100%",
          padding: 6,
        }}
      >
        <FormProvider {...methods}>
          <RHFAutocomplete
            fullWidth
            name="CURRENCY PAIR"
            sx={{ padding: 0 }}
            label={"CURRENCY PAIR"}
            placeholder="choose a currency pair"
            options={amounts}
            value={amounts.find((amount) => amount.id === selectedAmountId) || null}
            onChange={(_, newValue) => {
              const selectedAmount = newValue as Option | null;
              setValue("amount", selectedAmount?.id || 0, {
                shouldValidate: false,
              });
            }}
            getOptionLabel={(option) => getLabel(option, "fa_title")}
          />
          <RHFAutocomplete
            fullWidth
            name="RISK LEVEL"
            sx={{ padding: 0 }}
            label={"RISK LEVEL"}
            placeholder="choose risk level"
            options={riskLevels}
            value={riskLevels.find((risk) => risk.id === selectedRiskId) || null}
            onChange={(_, newValue) => {
              const selectedRisk = newValue as Option | null;
              setValue("risk", selectedRisk?.id || 0, {
                shouldValidate: false,
              });
            }}
            getOptionLabel={(option) => getLabel(option, "fa_title")}
          />
          <RHFAutocomplete
            fullWidth
            name="SIGNAL TYPE"
            sx={{ padding: 0 }}
            label={"SIGNAL TYPE"}
            placeholder="choose signal type"
            options={signalTypes}
            value={signalTypes.find((signal) => signal.id === selectedSignalId) || null}
            onChange={(_, newValue) => {
              const selectedSignal = newValue as Option | null;
              setValue("signal", selectedSignal?.id || 0, {
                shouldValidate: false,
              });
            }}
            getOptionLabel={(option) => getLabel(option, "fa_title")}
          />
          <RHFAutocomplete
            fullWidth
            name="TIME FRAME"
            sx={{ padding: 0 }}
            label={"TIME FRAME"}
            placeholder="choose time frame"
            options={timeFrames}
            value={timeFrames.find((time) => time.id === selectedTimeId) || null}
            onChange={(_, newValue) => {
              const selectedTime = newValue as Option | null;
              setValue("time", selectedTime?.id || 0, {
                shouldValidate: false,
              });
            }}
            getOptionLabel={(option) => getLabel(option, "fa_title")}
          />
        </FormProvider>
      </Stack>

      {/* Pie Chart Section */}
      <Stack
        sx={{
          backgroundColor: "rgba(0, 165, 232, 0.2)",
          borderRadius: 1,
          width: "100%",
          padding: 6,
        }}
      >
        <Stack direction={isMobile ? "column" : "row"} justifyContent={"space-between"} alignItems={"center"} mb={4}>
          <Typography variant={isMobile ? "p4-bold" : "p1-bold"} sx={{ mb: 3 }} color="primary.main">
            SIGNAL PERFORMANCE ANALYSIS
          </Typography>
          <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={10}>
            <Stack justifyContent={"center"} alignItems={"center"} gap={1}>
              <Typography variant="h6-bold" color="primary.main">
                94.7%
              </Typography>
              <Typography variant={isMobile ? "p4-bold" : "p1-bold"} color="primary.main">
                SUCCESS RATE
              </Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"} gap={1}>
              <Typography variant="h6-bold">847</Typography>
              <Typography variant={isMobile ? "p4-bold" : "p1-bold"}>TOTAL SIGNALS</Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"} gap={1}>
              <Typography variant="h6-bold">+23.5%</Typography>
              <Typography variant={isMobile ? "p4-bold" : "p1-bold"}>AVG. RETURN</Typography>
            </Stack>
          </Stack>
        </Stack>
        <SignalsPieChartComponent
          data={getFilteredData()}
          height={isMobile ? 300 : 600}
          showLegend={true}
          showTooltip={true}
          outerRadius={200}
        />
      </Stack>
    </Stack>
  );
};

export default SignalsPieChart;
