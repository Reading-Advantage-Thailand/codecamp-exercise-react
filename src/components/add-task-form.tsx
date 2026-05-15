"use client";

// TODO: Import useState from React
// TODO: Define AddTaskFormProps interface: { onAdd: (title: string) => void }

// TODO: Build the AddTaskForm component
// - Manage input value with useState
// - Handle form onSubmit: prevent default, validate non-empty, call onAdd, clear input

export function AddTaskForm() {
  return (
    <form>
      <input type="text" placeholder="Add a new task..." />
      <button type="submit">Add</button>
    </form>
  );
}
