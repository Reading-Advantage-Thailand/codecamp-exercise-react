"use client";

// 1. Import TaskCard
import { TaskCard } from "./task-card";

// Task
interface Task {
  id: string | number;
  title: string;
  completed: boolean;
}

// 2. Define TaskListProps interface
interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string | number) => void;
}

// 3. Build the TaskList component
export function TaskList({ tasks, onToggleTask }: TaskListProps) {
  // - Show "No tasks yet" when the list is empty
  if (tasks.length === 0) {
    return <div className="no-tasks">No tasks yet</div>;
  }

  return (
    <div className="task-list">
      {/* - Map over tasks and render a TaskCard for each */}
      {tasks.map((task) => (
        <TaskCard
          key={task.id} // - Use task.id as the key prop
          title={task.title}
          completed={task.completed}
          onToggle={() => onToggleTask(task.id)} // Send ID back when toggled
        />
      ))}
    </div>
  );
}