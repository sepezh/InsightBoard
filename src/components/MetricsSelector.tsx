"use client";

import { MetricType } from "@/store/analyticsSlice";

interface Props {
  value: MetricType;
  onChange: (metric: MetricType) => void;

}

export default function MetricSelector({ value, onChange }: Props) {

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as MetricType)}
      className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 rounded-lg mb-2"
    >
      <option value="users">Users</option>
      <option value="engagement">Engagement</option>
      <option value="activity">Activity</option>
    </select>
  );
}
