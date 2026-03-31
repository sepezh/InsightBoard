import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MetricType = "users" | "engagement" | "activity";

interface AnalyticsState {
  dateRange: { start: string; end: string };
  metric: MetricType;
  category: string | null;
}

const initialState: AnalyticsState = {
  dateRange: {
    start: "2024-01-01",
    end: new Date().toISOString().slice(0, 10),
  },
  metric: "users",
  category: null,
};

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setMetric: (state, action: PayloadAction<MetricType>) => {
      state.metric = action.payload;
    },
    setDateRange: (
      state,
      action: PayloadAction<{ start: string; end: string }>
    ) => {
      state.dateRange = action.payload;
    },
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload;
    },
  },
});

export const { setMetric, setDateRange, setCategory } = analyticsSlice.actions;
export default analyticsSlice.reducer;
