export type MetricKey = "users" | "engagement" | "activity";

export interface DataPoint {
  date: string;
  users: number;
  engagement: number;
  activity: number;
}
