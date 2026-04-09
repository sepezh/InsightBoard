interface TableRow {
  date: string;
  users: number;
}

export function RecentTable({ data, metric }: { data: TableRow[]; metric: string }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Recent Data</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">{metric.charAt(0).toUpperCase() + metric.slice(1)}</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr
                key={row.date}
                className="border-b border-gray-200 dark:border-gray-800"
              >
                <td className="py-2 px-3">{row.date}</td>
                <td className="py-2 px-3">{row.users}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
