"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import WidgetCard from "@/components/WidgetCard";
import { getFilteredData } from "@/lib/computeMetrics";

export default function Widgets() {
  const { metric, dateRange } = useSelector(
    (state: RootState) => state.analytics
  );

  const data = getFilteredData(metric, dateRange);

  const total = data.reduce((sum, d) => sum + Number(d[metric]), 0);
  const trend =
    ((Number(data[data.length - 1]?.[metric]) - Number(data[0]?.[metric])) /
      Number(data[0]?.[metric])) *
    100;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
      <WidgetCard label="Total" value={total} />
      <WidgetCard label="Trend" value={`${trend.toFixed(1)}%`} trend={trend} />
      <WidgetCard label="Data Points" value={data.length} />
      <WidgetCard label="Metric" value={metric} />
    </div>
  );
}
