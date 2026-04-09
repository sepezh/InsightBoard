"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import WidgetCard from "@/components/common/WidgetCard";
import { getFilteredData } from "@/lib/computeMetrics";
import { mockData } from "@/lib/mockData";

import { TotalModal } from "./TotalModal";
import { TrendModal } from "./TrendModal";
import { DataPointsModal } from "./DataPointsModal";
import { MetricModal } from "./MetricModal";

enum ModalType {
  Total = "Total",
  Trend = "Trend",
  DataPoints = "Data Points",
  Metric = "Metric",
}

export default function Widgets() {
  const [openModal, setOpenModal] = useState<ModalType | null>(null);
  const { metric, dateRange, quickRange } = useSelector(
    (state: RootState) => state.analytics,
  );

  const mockDataArray = useMemo(
    () => (typeof mockData === "function" ? mockData() : mockData),
    [],
  );

  const { startDate, endDate } = useMemo(() => {
    if (quickRange) {
      const end = new Date(mockDataArray[mockDataArray.length - 1].date);
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
  }, [dateRange, quickRange, mockDataArray]);

  // Filtered full dataset (DataPoint[])
  const fullData = useMemo(
    () => mockDataArray.filter((d) => d.date >= startDate && d.date <= endDate),
    [mockDataArray, startDate, endDate],
  );

  // Metric-specific filtered data
  const metricData = useMemo(
    () => getFilteredData(metric, { start: startDate, end: endDate }),
    [metric, startDate, endDate],
  );

  // Trend data for TrendModal
  const trendData = useMemo(
    () =>
      fullData.map((d) => ({
        date: d.date,
        value: Number(d[metric]),
      })),
    [fullData, metric],
  );

  // Total & trend calculations
  const total = useMemo(
    () => metricData.reduce((sum, d) => sum + Number(d[metric]), 0),
    [metricData, metric],
  );

  const trend = useMemo(() => {
    if (metricData.length < 2) return 0;

    const first = Number(metricData[0][metric]);
    const last = Number(metricData[metricData.length - 1][metric]);

    return ((last - first) / first) * 100;
  }, [metricData, metric]);

  const upperCaseMetric = metric.charAt(0).toUpperCase() + metric.slice(1);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
      <WidgetCard
        label="Total"
        value={total}
        onClick={() => setOpenModal(ModalType.Total)}
      />

      <WidgetCard
        label="Trend"
        value={`${trend.toFixed(1)}%`}
        trend={trend}
        onClick={() => setOpenModal(ModalType.Trend)}
      />

      <WidgetCard
        label="Data Points"
        value={metricData.length}
        onClick={() => setOpenModal(ModalType.DataPoints)}
      />

      <WidgetCard
        label="Metric"
        value={upperCaseMetric}
        onClick={() => setOpenModal(ModalType.Metric)}
      />

      {openModal === ModalType.Total && (
        <TotalModal
          data={fullData}
          metric={metric}
          onClose={() => setOpenModal(null)}
        />
      )}

      {openModal === ModalType.Trend && (
        <TrendModal
          data={trendData}
          metric={metric}
          trend={trend}
          onClose={() => setOpenModal(null)}
        />
      )}

      {openModal === ModalType.DataPoints && (
        <DataPointsModal data={fullData} onClose={() => setOpenModal(null)} />
      )}

      {openModal === ModalType.Metric && (
        <MetricModal metric={metric} onClose={() => setOpenModal(null)} />
      )}
    </div>
  );
}
