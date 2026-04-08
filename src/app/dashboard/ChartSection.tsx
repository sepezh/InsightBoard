"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getFilteredData } from "@/lib/computeMetrics";
import { mockData } from "@/lib/mockData";
import { Suspense, useMemo } from "react";
import dynamic from "next/dynamic";
import ChartSkeleton from "@/components/ChartSkeleton";

const AreaChartCard = dynamic(() => import("@/components/AreaChartCard"));
const LineChartCard = dynamic(() => import("@/components/LineChartCard"));

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
      <ChartArea title="Metric Over Time">
        <AreaChartCard data={data} dataKey={metric} />
      </ChartArea>
      <ChartArea title="Daily Trend">
        <LineChartCard data={trendData} dataKey="trend" />
      </ChartArea>
    </div>
  );
}

export function ChartArea({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn">
      <h3 className="text-lg font-semibold mb-4 tracking-tight">{title}</h3>
      <Suspense fallback={<ChartSkeleton />}>{children}</Suspense>
    </div>
  );
}
