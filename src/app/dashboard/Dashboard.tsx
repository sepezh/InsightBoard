import LineChartFilters from "./LineChartFilters";
import ChartSection from "./ChartSection";
import Widgets from "./Widgets";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold tracking-tight">InsightBoard</h1>
          <ThemeSwitcher />
        </div>
        <LineChartFilters />
        <Widgets />
        <ChartSection />
      </div>
    </div>
  );
}
