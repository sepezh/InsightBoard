interface Props {
  label: string;
  value: string | number;
}

export function Stat({ label, value }: Props) {
  return (
    <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </div>
  );
}
