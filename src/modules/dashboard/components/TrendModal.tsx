"use client";

import Modal from "@/components/common/Modal";
import { Stat } from "@/components/common/Stat";
import { BigLineChart } from "@/components/charts/BigLineChart";

export interface TrendDataPoint {
  date: string;
  value: number;
}

interface TrendModalProps {
  data: TrendDataPoint[];
  trend: number;
  metric: string;
  onClose: () => void;
}

export function TrendModal({ data, trend, metric, onClose }: TrendModalProps) {
  const half = Math.floor(data.length / 2);

  const prev = data.slice(0, half).reduce((s, d) => s + d.value, 0);
  const curr = data.slice(half).reduce((s, d) => s + d.value, 0);

  return (
    <Modal title={`Trend Analysis (${metric})`} onClose={onClose}>
      <BigLineChart data={data} metricKey="value" />

      <div className="grid grid-cols-2 gap-4 mt-6">
        <Stat label="Trend %" value={`${trend.toFixed(1)}%`} />
        <Stat label="Previous Period" value={prev} />
        <Stat label="Current Period" value={curr} />
        <Stat label="Difference" value={curr - prev} />
      </div>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Growth increased by <strong>{trend.toFixed(1)}%</strong> compared to the
        previous period.
      </p>
    </Modal>
  );
}
