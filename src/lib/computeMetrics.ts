import { mockData } from "./mockData";
import { MetricType } from "@/store/slices/analyticsSlice";

export function getFilteredData(
  metric: MetricType,
  range: { start: string; end: string },
) {
  return mockData()
    .filter((d) => d.date >= range.start && d.date <= range.end)
    .map((d) => ({
      date: d.date,
      [metric]: d[metric],
    }));
}
