interface TaskCardProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
}

export function TaskCard({ title, completed, onToggle }: TaskCardProps) {
  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span>{title}</span>
    </div>
  );
}
