"use client";

import React from "react";
import TaskCard from "./task-card";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
}

export function TaskList({ tasks, onToggleTask }: TaskListProps) {
  
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 border border-dashed rounded-xl border-gray-300 bg-gray-50">
        <p className="text-gray-500 font-medium">🎉 No tasks yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {/* - Map over tasks and render a TaskCard for each 
          - Use task.id as the key prop
      */}
      {tasks.map((task) => (
        <TaskCard
          key={task.id} 
          title={task.title}
          completed={task.completed}
          onToggle={() => onToggleTask(task.id)}
        />
      ))}
    </div>
  );
}
