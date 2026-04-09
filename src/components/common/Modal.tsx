"use client";

import Portal from "./Portal";

interface Props {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ title, children, onClose }: Props) {
  return (
    <Portal>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-9999"
        onClick={onClose}
      >
        <div
          className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-3xl p-6 relative max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold mb-4">{title}</h2>

          {children}
        </div>
      </div>
    </Portal>
  );
}
