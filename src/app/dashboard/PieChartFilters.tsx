interface PieChartFiltersProps {
  selectedWeek: number;
  setSelectedWeek: (week: number) => void;
  weeks: Array<{ week: number; startDate: string; endDate: string }>;
}

export default function PieChartFilters({
  selectedWeek,
  setSelectedWeek,
  weeks,
}: PieChartFiltersProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn">
      <select
        value={selectedWeek}
        onChange={(e) => setSelectedWeek(Number(e.target.value))}
        className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 rounded-lg mb-2"
      >
        {weeks.map((w) => (
          <option key={w.week} value={w.week}>
            Week {w.week} ({w.startDate} to {w.endDate})
          </option>
        ))}
      </select>
    </div>
  );
}
