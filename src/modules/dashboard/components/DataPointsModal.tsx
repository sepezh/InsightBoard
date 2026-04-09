"use client";

import Modal from "@/components/common/Modal";
import { DataPoint } from "@/types/analytics";

interface DataPointsModalProps {
  data: DataPoint[];
  onClose: () => void;
}

export function DataPointsModal({ data, onClose }: DataPointsModalProps) {
  return (
    <Modal title="Raw Data Points" onClose={onClose}>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Users</th>
              <th className="py-2 px-3">Engagement</th>
              <th className="py-2 px-3">Activity</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr
                key={`${row.date}-${index}`}
                className="border-b border-gray-200 dark:border-gray-800"
              >
                <td className="py-2 px-3">{row.date}</td>
                <td className="py-2 px-3">{row.users}</td>
                <td className="py-2 px-3">{row.engagement}</td>
                <td className="py-2 px-3">{row.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
