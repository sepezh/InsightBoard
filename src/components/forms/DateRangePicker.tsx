"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  value: { start: string; end: string };
  onChange: (range: { start: string; end: string }) => void;
}

export default function DateRangePicker({ value, onChange }: Props) {
  console.log("DateRangePicker value:", value);
  return (
    <div className="flex flex-col md:flex-row items-center gap-3">
      <DatePicker
        selected={value.start ? new Date(value.start) : null}
        portalId="datepicker-portal"
        dateFormat="yyyy-MM-dd"
        className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-1.5 lg:p-2 rounded-lg"
        onChange={(date: Date | null) =>
          onChange({
            ...value,
            start: date ? date.toISOString().split("T")[0] : "",
          })
        }
      />

      <span className="text-gray-500">→</span>

      <DatePicker
        selected={value.end ? new Date(value.end) : null}
        portalId="datepicker-portal"
        dateFormat="yyyy-MM-dd"
        className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-1.5 lg:p-2 rounded-lg"
        onChange={(date: Date | null) =>
          onChange({
            ...value,
            end: date ? date.toISOString().split("T")[0] : "",
          })
        }
      />
    </div>
  );
}
