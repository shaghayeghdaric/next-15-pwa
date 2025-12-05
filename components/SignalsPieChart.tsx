"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Box, Typography, useTheme } from "@mui/material";

export interface PieChartData {
  name: string;
  value: number;
  color?: string;
}

interface SignalsPieChartProps {
  data: PieChartData[];
  title?: string;
  height?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  innerRadius?: number;
  outerRadius?: number;
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    payload: { total: number };
  }>;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "8px 12px",
          borderRadius: "4px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Typography variant="p1-bold">{data.name}</Typography>
        <Typography variant="p1-regular">Value: {data.value}</Typography>
        <Typography variant="p1-regular">
          Percentage: {((data.value / data.payload.total) * 100).toFixed(1)}%
        </Typography>
      </Box>
    );
  }
  return null;
};

const SignalsPieChartComponent: React.FC<SignalsPieChartProps> = ({
  data,
  title,
  height = 400,
  showLegend = true,
  showTooltip = true,
  innerRadius = 0,
  outerRadius = 150,
}) => {
  const theme = useTheme();

  // Make the radius responsive to the height and ensure it uses more space
  const responsiveOuterRadius = Math.min(outerRadius, (height - 100) / 2);

  // Default colors based on your theme
  const defaultColors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    "#00E676",
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
    "#98D8C8",
  ];

  // Add colors to data if not provided
  const dataWithColors = data.map((item, index) => ({
    ...item,
    color: item.color || defaultColors[index % defaultColors.length],
  }));

  // Calculate total for percentage calculation
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const dataWithTotal = dataWithColors.map((item) => ({
    ...item,
    total,
  }));

  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      {title && (
        <Typography variant="h5-bold" sx={{ mb: 2 }}>
          {title}
        </Typography>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={dataWithTotal}
            cx="50%"
            cy="50%"
            outerRadius={responsiveOuterRadius}
            innerRadius={innerRadius}
            fill="#8884d8"
            dataKey="value"
          >
            {dataWithTotal.map((entry, index) => (
              <Cell key={`cell-${entry.name}-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {showTooltip && <Tooltip content={<CustomTooltip />} />}
          {showLegend && (
            <Legend
              wrapperStyle={{
                paddingTop: "20px",
                fontSize: "14px",
              }}
            />
          )}
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SignalsPieChartComponent;
