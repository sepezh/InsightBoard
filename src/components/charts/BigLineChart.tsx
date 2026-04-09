"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type BigLineChartProps<T extends Record<string, any>> = {
  data: T[];
  metricKey: keyof T;
};

export function BigLineChart<T extends { date: string }>({
  data,
  metricKey,
}: BigLineChartProps<T>) {
  return (
    <div className="w-full h-64 mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="date" hide />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={metricKey as string}
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
