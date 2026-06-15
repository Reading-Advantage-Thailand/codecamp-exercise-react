"use client";

import React from "react";

interface TaskCardProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
}

export default function TaskCard({ title, completed, onToggle }: TaskCardProps) {
  const containerClass = completed 
    ? "task-card flex items-center gap-3 p-3 bg-gray-50 border-gray-200 border rounded-lg shadow-sm completed" 
    : "task-card flex items-center gap-3 p-3 bg-white border rounded-lg shadow-sm hover:shadow transition";

  const titleClass = completed 
    ? "text-gray-400 font-normal line-through completed" 
    : "text-gray-800 font-medium transition-all";

  return (
    <div className={containerClass}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="w-5 h-5 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <span className={titleClass}>
        {title}
      </span>
    </div>
  );
}
