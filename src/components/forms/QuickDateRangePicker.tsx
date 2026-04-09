"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setQuickRange } from "@/store/slices/analyticsSlice";

export default function QuickDateRangePicker() {
  const dispatch = useDispatch();
  const quickRange = useSelector(
    (state: RootState) => state.analytics.quickRange,
  );

  const base =
    "px-1 lg:px-2 py-1.5 mb-2 rounded-lg border text-sm focus-visible:outline-none";
  const inactive =
    "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800";
  const active =
    "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500";

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => dispatch(setQuickRange(7))}
        className={`${base} ${quickRange === 7 ? active : inactive}`}
      >
        Last 7 days
      </button>

      <button
        onClick={() => dispatch(setQuickRange(30))}
        className={`${base} ${quickRange === 30 ? active : inactive}`}
      >
        Last 30 days
      </button>

      <button
        onClick={() => dispatch(setQuickRange(90))}
        className={`${base} ${quickRange === 90 ? active : inactive}`}
      >
        Last 90 days
      </button>
    </div>
  );
}
