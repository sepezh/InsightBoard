import LineChartFilters from "../../components/forms/LineChartFilters";
import ChartSection from "../../modules/dashboard/components/ChartSection";
import Widgets from "../../modules/dashboard/components/Widgets";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import LogoImg from "@/assets/images/logo.png";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <img
              src={LogoImg.src}
              alt="InsightBoard Logo"
              className="h-10 w-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(71%) sepia(11%) saturate(1294%) hue-rotate(206deg) brightness(94%) contrast(90%)",
              }}
            />
            <h1 className="text-4xl font-bold tracking-tight">InsightBoard</h1>
          </div>
          <ThemeSwitcher />
        </div>
        <LineChartFilters />
        <Widgets />
        <ChartSection />
      </div>
    </div>
  );
}
