"use client";

// Task
interface Task {
  id: string | number;
  title: string;
  completed: boolean;
}

// 1. Define TaskStatsProps interface
interface TaskStatsProps {
  tasks: Task[];
}

// 2. component
export function TaskStats({ tasks }: TaskStatsProps) {
  // - Calculate total, completed, and remaining counts
  const total = tasks.length;
  
  // (completed === true)
  const completed = tasks.filter((task) => task.completed).length;
  
  // จำนวนที่เหลือ คือ ทั้งหมดลบด้วยที่เสร็จแล้ว
  const remaining = total - completed;

  // - Display them in a stats bar
  return (
    <div className="stats">
      <span>Total: {total}</span>
      <span>Completed: {completed}</span>
      <span>Remaining: {remaining}</span>
    </div>
  );
}