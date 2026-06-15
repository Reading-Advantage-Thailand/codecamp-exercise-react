"use client";

import { useState, useEffect } from "react";
import { AddTaskForm } from "@/components/add-task-form";
import { TaskList } from "@/components/task-list";
import { TaskStats } from "@/components/task-stats";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTasks = localStorage.getItem("codecamp_tasks_data");
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (e) {
        console.error("Failed to parse tasks from localStorage", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("codecamp_tasks_data", JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            🎯 Task Manager
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Stay organized and keep track of your daily notes.
          </p>
        </div>

        <TaskStats tasks={tasks} />
        <AddTaskForm onAdd={addTask} />
        
        <div className="border-t pt-4">
          <h2 className="text-lg font-bold text-slate-800 mb-3">Your Tasks</h2>
          <TaskList tasks={tasks} onToggleTask={toggleTask} />
        </div>
      </div>
    </main>
  );
}
