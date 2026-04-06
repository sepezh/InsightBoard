"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setMetric, setDateRange } from "@/store/analyticsSlice";
import MetricSelector from "@/components/MetricsSelector";
import DateRangePicker from "@/components/DateRangePicker";
import QuickDateFilters from "@/components/QuickDateFilters";
import ChartSkeleton from "@/components/ChartSkeleton";

export default function Filters() {
  const dispatch = useDispatch();
  const { metric, dateRange } = useSelector(
    (state: RootState) => state.analytics,
  );

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn">
      <MetricSelector value={metric} onChange={(m) => dispatch(setMetric(m))} />

      <QuickDateFilters />
      <DateRangePicker
        value={dateRange}
        onChange={(range) => dispatch(setDateRange(range))}
      />
    </div>
  );
}
