"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setMetric, setDateRange } from "@/store/slices/analyticsSlice";
import MetricSelector from "@/components/forms/MetricsSelector";
import DateRangePicker from "@/components/forms/DateRangePicker";
import QuickDateRangePicker from "@/components/forms/QuickDateRangePicker";

export default function LineChartFilters() {
  const dispatch = useDispatch();
  const { metric, dateRange } = useSelector(
    (state: RootState) => state.analytics,
  );

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn">
      <MetricSelector value={metric} onChange={(m) => dispatch(setMetric(m))} />
      <div className="mt-4 flex flex-col md:flex-row items-start md:items-baseline gap-4">
        <QuickDateRangePicker />
        <DateRangePicker
          value={dateRange}
          onChange={(range) => dispatch(setDateRange(range))}
        />
      </div>
    </div>
  );
}
