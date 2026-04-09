"use client";

import Modal from "@/components/common/Modal";
import { Stat } from "@/components/common/Stat";
import { RecentTable } from "@/components/tables/RecentTable";
import { BigLineChart } from "@/components/charts/BigLineChart";
import { MetricKey, DataPoint } from "@/types/analytics";

interface TotalModalProps {
  data: DataPoint[];
  metric: MetricKey;
  onClose: () => void;
}

export function TotalModal({ data, metric, onClose }: TotalModalProps) {
  const total = data.reduce((sum, d) => sum + Number(d[metric]), 0);
  const avg = Math.round(total / data.length);

  const highest = data.reduce((a, b) => (a[metric] > b[metric] ? a : b));

  const lowest = data.reduce((a, b) => (a[metric] < b[metric] ? a : b));

  return (
    <Modal title={`Total ${metric}`} onClose={onClose}>
      <BigLineChart data={data} metricKey={metric} />
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Stat label="Total" value={total} />
        <Stat label="Average per day" value={avg} />
        <Stat
          label="Highest day"
          value={`${highest.date} (${highest[metric]})`}
        />
        <Stat label="Lowest day" value={`${lowest.date} (${lowest[metric]})`} />
      </div>

      <RecentTable data={data.slice(-7)} metric={metric} />
    </Modal>
  );
}
