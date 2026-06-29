"use client";

import { useState, useEffect } from "react";
import { AddTaskForm } from "@/components/add-task-form";
import { TaskList } from "@/components/task-list";
import { TaskStats } from "@/components/task-stats";

interface Task {
  id: string | number;
  title: string;
  completed: boolean;
}

export default function Home() {
  // Use lazy state initialization to load data from localStorage instantly,
  // preventing empty state from overwriting saved data on initial render.
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window !== "undefined") {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    }
    return [];
  });

  // Persist tasks to localStorage whenever the tasks state changes (including empty arrays)
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

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
      
      <TaskStats tasks={tasks} />
      
      <AddTaskForm onAdd={addTask} />
      
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </div>
  );
}