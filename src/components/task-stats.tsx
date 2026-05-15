interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskStatsProps {
  tasks: Task[];
}

export function TaskStats({ tasks }: TaskStatsProps) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="stats">
      <span>Total: {total}</span>
      <span>Completed: {completed}</span>
      <span>Remaining: {remaining}</span>
    </div>
  );
}
