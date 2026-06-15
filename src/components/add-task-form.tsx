"use client";

import React, { useState, FormEvent } from "react";

interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

export function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // ป้องกันหน้าเว็บรีเฟรชเอง
    
    if (!title.trim()) return;

    onAdd(title.trim());
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input 
        type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..." 
        className="flex-1 px-4 py-2 border rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
      />
      <button 
        type="submit"
        disabled={!title.trim()}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
      >
        Add
      </button>
    </form>
  );
}
