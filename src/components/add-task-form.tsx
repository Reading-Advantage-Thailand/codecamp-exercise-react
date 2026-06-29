"use client";


import { useState, FormEvent } from "react";


interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

export function AddTaskForm({ onAdd }: AddTaskFormProps) {

  const [title, setTitle] = useState("");


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); 

  
    if (!title.trim()) return;

   
    onAdd(title);

  
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add a new task..." 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}