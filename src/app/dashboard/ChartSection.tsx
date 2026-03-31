"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ChartCard from "@/components/ChartCard";
import { getFilteredData } from "@/lib/computeMetrics";

export default function ChartSection() {
  const { metric, dateRange } = useSelector(
    (state: RootState) => state.analytics,
  );

  const data = getFilteredData(metric, dateRange);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 animate-fadeIn">
      <ChartCard title="Metric Over Time" data={data} dataKey={metric} />
      <ChartCard title="Daily Trend" data={data} dataKey={metric} />
    </div>
  );
}
