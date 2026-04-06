"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getFilteredData } from "@/lib/computeMetrics";
import { mockData } from "@/lib/mockData";
import { useMemo } from "react";
import AreaChartCard from "@/components/AreaChartCard";
import LineChartCard from "@/components/LineChartCard";

export default function ChartSection() {
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

  const trendData = data.map((d, i) => {
    if (i === 0) return { ...d, trend: 0 };
    return {
      ...d,
      trend: (d[metric] as number) - (data[i - 1][metric] as number),
    };
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 animate-fadeIn">
      <AreaChartCard title="Metric Over Time" data={data} dataKey={metric}/>
      <LineChartCard title="Daily Trend" data={trendData} dataKey="trend"/>
    </div>
  );
}
