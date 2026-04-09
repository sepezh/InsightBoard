"use client";

import Modal from "@/components/common/Modal";
import { MetricKey } from "@/types/analytics";

interface MetricModalProps {
  metric: MetricKey;
  onClose: () => void;
}

export function MetricModal({ metric, onClose }: MetricModalProps) {
  const upperCaseMetric = metric.charAt(0).toUpperCase() + metric.slice(1);
  return (
    <Modal title={`${upperCaseMetric} Explanation`} onClose={onClose}>
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          <strong>{upperCaseMetric}</strong> represents the selected metric
          displayed in the dashboard.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          <strong>How it's calculated:</strong>
          <br />
          The system aggregates daily values of{" "}
          <strong>{upperCaseMetric}</strong> across the selected date range.
        </p>

        <p className="text-gray-700 dark:text-gray-300">
          <strong>Data Source:</strong>
          <br />
          This metric is derived from the filtered analytics dataset.
        </p>
      </div>
    </Modal>
  );
}
