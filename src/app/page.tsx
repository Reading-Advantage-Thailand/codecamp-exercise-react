"use client";

// TODO: Import useState and useEffect from React
// TODO: Import your components: TaskList, AddTaskForm, TaskStats

// TODO: Define a Task interface: { id: string; title: string; completed: boolean }

export default function Home() {
  // TODO: Create a tasks state with useState<Task[]>([])

  // TODO: Write an addTask function that adds a new task to the array

  // TODO: Write a toggleTask function that toggles a task's completed status

  // TODO: Add a useEffect to save tasks to localStorage whenever tasks change

  // TODO: Add a useEffect to load tasks from localStorage on mount

  return (
    <div>
      <h1>Task Manager</h1>
      {/* TODO: Render TaskStats with tasks */}
      {/* TODO: Render AddTaskForm with onAdd handler */}
      {/* TODO: Render TaskList with tasks and onToggle handler */}
      <p>Complete the TODOs in this file and in src/components/ to build the app.</p>
    </div>
  );
}
