import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface Props {
  data: any[];
  dataKey: string;
}

const LineChartCard = ({ data, dataKey }: Props) => {
  return (
    <LineChart
      style={{
        width: "100%",
        maxWidth: "700px",
        height: "100%",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="gray" />
      <XAxis dataKey="date" stroke="#7d7d7d" />
      <YAxis dataKey={dataKey} width="auto" stroke="#7d7d7d" />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={dataKey}
        stroke="#8884d8"
        dot={{
          fill: "#8884d8",
        }}
        activeDot={{ r: 8, stroke: "#8884d8" }}
      />
    </LineChart>
  );
};

export default LineChartCard;
