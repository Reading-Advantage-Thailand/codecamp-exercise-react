"use client";

// 1. Define TaskCardProps interface
interface TaskCardProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
}

// 2. Build the TaskCard component
export function TaskCard({ title, completed, onToggle }: TaskCardProps) {
  return (
    // - Add "completed" class when the task is done
    <div className={`task-card ${completed ? "completed" : ""}`}>
      {/* - Render a checkbox input */}
      <input 
        type="checkbox" 
        checked={completed}
        onChange={onToggle} // - Call onToggle when the checkbox changes
      />
      {/* - Render a span with the title */}
      <span>{title}</span>
    </div>
  );
}