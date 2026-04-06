interface Props {
  label: string;
  value: string | number;
  trend?: number;
}

export default function WidgetCard({ label, value, trend }: Props) {
  const roundedPercentage = trend !== undefined ? trend.toFixed(1) : undefined;
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn">
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <h2 className="text-3xl font-bold mt-1">{value}</h2>

      {trend !== undefined && (
        <p
          className={`mt-2 text-sm font-medium ${trend >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {trend >= 0 ? "+" : ""}
          {roundedPercentage}%
        </p>
      )}
    </div>
  );
}
