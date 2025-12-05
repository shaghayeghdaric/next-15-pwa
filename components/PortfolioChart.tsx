"use client";

import type React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Box, Typography, useTheme } from "@mui/material";

// Sample portfolio data - replace with real data
const portfolioData = [
  { date: "2024-01", value: 10000, profit: 0 },
  { date: "2024-02", value: 10500, profit: 500 },
  { date: "2024-03", value: 11200, profit: 1200 },
  { date: "2024-04", value: 10800, profit: 800 },
  { date: "2024-05", value: 12500, profit: 2500 },
  { date: "2024-06", value: 13200, profit: 3200 },
  { date: "2024-07", value: 14100, profit: 4100 },
  { date: "2024-08", value: 13500, profit: 3500 },
  { date: "2024-09", value: 15200, profit: 5200 },
  { date: "2024-10", value: 16800, profit: 6800 },
  { date: "2024-11", value: 18500, profit: 8500 },
  { date: "2024-12", value: 19200, profit: 9200 },
];

interface PortfolioChartProps {
  data?: typeof portfolioData;
  height?: number;
  showProfit?: boolean;
  chartType?: "line" | "area";
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
    color: string;
  }>;
  label?: string;
}

const PortfolioChart: React.FC<PortfolioChartProps> = ({
  data = portfolioData,
  height = 300,
  showProfit = true,
  chartType = "area",
}) => {
  const theme = useTheme();

  // Custom tooltip component
  const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: 1,
            p: 2,
            boxShadow: theme.shadows[4],
          }}
        >
          <Typography variant="h5-regular" color="text.secondary">
            {label}
          </Typography>
          <Typography variant="h3-bold" color="primary.main">
            ${payload[0].value.toLocaleString()}
          </Typography>
          {showProfit && payload[1] && (
            <Typography variant="h5-regular" color={payload[1].value >= 0 ? "success.main" : "error.main"}>
              Profit: ${payload[1].value.toLocaleString()}
            </Typography>
          )}
        </Box>
      );
    }
    return null;
  };

  const ChartComponent = chartType === "area" ? AreaChart : LineChart;

  return (
    <Box sx={{ width: "100%", height: height }}>
      <ResponsiveContainer width="100%" height="100%">
        <ChartComponent
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} opacity={0.3} />
          <XAxis dataKey="date" stroke={theme.palette.text.secondary} fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            stroke={theme.palette.text.secondary}
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          />
          <Tooltip content={<CustomTooltip />} />

          {chartType === "area" ? (
            <>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={theme.palette.primary.main} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={theme.palette.primary.main} stopOpacity={0} />
                </linearGradient>
                {showProfit && (
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={theme.palette.success.main} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={theme.palette.success.main} stopOpacity={0} />
                  </linearGradient>
                )}
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={theme.palette.primary.main}
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorValue)"
                dot={{ r: 4, fill: theme.palette.primary.main }}
                activeDot={{ r: 6, fill: theme.palette.primary.main }}
              />
              {showProfit && (
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke={theme.palette.success.main}
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorProfit)"
                  dot={{ r: 3, fill: theme.palette.success.main }}
                />
              )}
            </>
          ) : (
            <>
              <Line
                type="monotone"
                dataKey="value"
                stroke={theme.palette.primary.main}
                strokeWidth={3}
                dot={{ r: 4, fill: theme.palette.primary.main }}
                activeDot={{ r: 6, fill: theme.palette.primary.main }}
              />
              {showProfit && (
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke={theme.palette.success.main}
                  strokeWidth={2}
                  dot={{ r: 3, fill: theme.palette.success.main }}
                />
              )}
            </>
          )}
        </ChartComponent>
      </ResponsiveContainer>
    </Box>
  );
};

export default PortfolioChart;
