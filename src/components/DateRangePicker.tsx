"use client";

interface Props {
  value: { start: string; end: string };
  onChange: (range: { start: string; end: string }) => void;
}

export default function DateRangePicker({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="date"
        value={value.start}
        onChange={(e) => onChange({ ...value, start: e.target.value })}
        className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 rounded-lg"
      />

      <span className="text-gray-500">→</span>

      <input
        type="date"
        value={value.end}
        onChange={(e) => onChange({ ...value, end: e.target.value })}
        className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-2 rounded-lg"
      />
    </div>
  );
}
