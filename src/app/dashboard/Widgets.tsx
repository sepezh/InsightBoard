"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import WidgetCard from "@/components/WidgetCard";
import { getFilteredData } from "@/lib/computeMetrics";
import { mockData } from "@/lib/mockData";
import { useMemo } from "react";

export default function Widgets() {
  const { metric, dateRange, quickRange } = useSelector(
    (state: RootState) => state.analytics,
  );

  const { startDate, endDate } = useMemo(() => {
    if (quickRange) {
      const end = new Date(mockData[mockData.length - 1].date);
      const start = new Date(end);
      start.setDate(end.getDate() - quickRange);

      return {
        startDate: start.toISOString().slice(0, 10),
        endDate: end.toISOString().slice(0, 10),
      };
    }

    return {
      startDate: dateRange.start,
      endDate: dateRange.end,
    };
  }, [dateRange, quickRange]);

  const data = getFilteredData(metric, { start: startDate, end: endDate });

  const total = data.reduce((sum, d) => sum + Number(d[metric]), 0);
  const trend =
    data.length > 1
      ? ((Number(data[data.length - 1][metric]) - Number(data[0][metric])) /
          Number(data[0][metric])) *
        100
      : 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
      <WidgetCard label="Total" value={total} />
      <WidgetCard label="Trend" value={`${trend.toFixed(1)}%`} trend={trend} />
      <WidgetCard label="Data Points" value={data.length} />
      <WidgetCard label="Metric" value={metric} />
    </div>
  );
}
