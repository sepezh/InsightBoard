"use client";

import dynamic from "next/dynamic";

import ChartSkeleton from "./ChartSkeleton";

const Chart = dynamic(() => import("./Chart"), {
  ssr: false,
  loading: () => <ChartSkeleton />,
});

interface Props {
  title: string;
  data: any[];
  dataKey: string;
}

export default function ChartCard({ title, data, dataKey }: Props) {
  console.log("Rendering ChartCard with data:", data);
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn">
        <h3 className="text-lg font-semibold mb-4 tracking-tight">{title}</h3>

       <Chart data={data} dataKey={dataKey}/>
    </div>
  );
}
