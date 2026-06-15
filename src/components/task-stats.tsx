"use client";

import React from "react";
import { Task } from "@/types/task"; // Import shared interface

interface TaskStatsProps {
  tasks: Task[];
}

export function TaskStats({ tasks }: TaskStatsProps) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const remaining = total - completed;

  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-50 border p-4 rounded-xl text-center">
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{total}</p>
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Completed</p>
        <p className="text-2xl font-bold text-green-600 mt-1">{completed}</p>
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Remaining</p>
        <p className="text-2xl font-bold text-blue-600 mt-1">{remaining}</p>
      </div>
    </div>
  );
}
