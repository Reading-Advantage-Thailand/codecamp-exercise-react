"use client";

// // TODO: Import useState and useEffect from React
import { useState, useEffect } from "react";

// // TODO: Import your components: TaskList, AddTaskForm, TaskStats
import { AddTaskForm } from "@/components/add-task-form";
import { TaskList } from "@/components/task-list";
import { TaskStats } from "@/components/task-stats";

// // TODO: Define a Task interface: { id: string; title: string; completed: boolean }
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function Home() {
  // // TODO: Create a tasks state with useState<Task[]>([])
  const [tasks, setTasks] = useState<Task[]>([]);

  // // TODO: Add a useEffect to load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // // TODO: Add a useEffect to save tasks to localStorage whenever tasks change
  useEffect(() => {
  
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // // TODO: Write an addTask function that adds a new task to the tasks state
  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // // // TODO: Write a toggleTask function that toggles a task's completed status
  const toggleTask = (id: string | number) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
};

  return (
    <div className="p-6 max-w-md mx-auto space-y-6">
      <h1>Task Manager</h1>
      
      {/* // TODO: Render TaskStats with tasks */}
      <TaskStats tasks={tasks} />
      
      {/* // TODO: Render AddTaskForm with onAdd handler */}
      <AddTaskForm onAdd={addTask} />
      
      {/* // TODO: Render TaskList with tasks and onToggle handler */}
     <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </div>
  );
}