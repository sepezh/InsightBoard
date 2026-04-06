"use client";

import { useState } from "react";

import PieChartCard from "@/components/PieChartCard";
import { mockData } from "@/lib/mockData";
import PieChartFilters from "./PieChartFilters";

export default function PieChartSection() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const weeks = [];
  for (let i = 0; i < mockData.length; i += 7) {
    const slice = mockData.slice(i, i + 7);

    const avgUsers = slice.reduce((sum, d) => sum + d.users, 0) / slice.length;

    const avgEngagement =
      slice.reduce((sum, d) => sum + d.engagement, 0) / slice.length;

    const avgActivity =
      slice.reduce((sum, d) => sum + d.activity, 0) / slice.length;

    weeks.push({
      week: weeks.length + 1,
      startDate: slice[0].date,
      endDate: slice[slice.length - 1].date,
      users: Math.round(avgUsers),
      engagement: Math.round(avgEngagement),
      activity: Math.round(avgActivity),
    });
  }

  const selected = weeks[selectedWeek - 1];

  const pieData = [
    { name: "Users", value: selected.users },
    { name: "Engagement", value: selected.engagement },
    { name: "Activity", value: selected.activity },
  ];

  return (
    <>
      <PieChartFilters
        selectedWeek={selectedWeek}
        setSelectedWeek={setSelectedWeek}
        weeks={weeks}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 animate-fadeIn">
        <PieChartCard data={pieData} />
      </div>
    </>
  );
}
