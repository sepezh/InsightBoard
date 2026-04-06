import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface Props {
  title: string;
  data: any[];
  dataKey: string;
}

const AreaChartCard = ({ title, data, dataKey }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeIn">
      <h3 className="text-lg font-semibold mb-4 tracking-tight">{title}</h3>
      <AreaChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        onContextMenu={(_, e) => e.preventDefault()}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" niceTicks="snap125" />
        <YAxis width="auto" niceTicks="snap125" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
};

export default AreaChartCard;
