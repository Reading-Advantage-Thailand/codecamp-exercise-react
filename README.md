# Codecamp Exercise: React

## Learning Objectives

- Build functional components with props and TypeScript interfaces
- Manage local state with `useState`
- Handle side effects with `useEffect`
- Render lists with `.map()` and use proper `key` props
- Lift state up to share data between components
- Handle events and form inputs in React

## Exercise Instructions

### Build a Task Manager App

1. **Fork** this repository and **clone** your fork
2. Run `pnpm install` and `pnpm dev`
3. Open `http://localhost:3000` and complete the component stubs

#### Step 1: TaskCard Component (`src/components/task-card.tsx`)
- Accept props: `title`, `completed`, `onToggle`
- Display the task title with a checkbox
- Call `onToggle` when the checkbox is clicked
- Style completed tasks with strikethrough text

#### Step 2: TaskList Component (`src/components/task-list.tsx`)
- Accept a `tasks` array and render `TaskCard` for each task
- Use `.map()` with a proper `key` prop
- Show "No tasks yet" when the array is empty

#### Step 3: AddTaskForm Component (`src/components/add-task-form.tsx`)
- Manage input state with `useState`
- Handle form submission to add a new task
- Clear the input after submission
- Prevent empty task submission

#### Step 4: TaskStats Component (`src/components/task-stats.tsx`)
- Display: total tasks, completed tasks, remaining tasks
- Update automatically when tasks change

#### Step 5: Wire It Together (`src/app/page.tsx`)
- Manage the task list state in the page component
- Pass state and handlers down to child components
- Add a `useEffect` to save tasks to `localStorage`

## Acceptance Criteria

- [ ] Tasks can be added via the form
- [ ] Tasks can be toggled complete/incomplete
- [ ] Task stats update in real-time
- [ ] Empty form submission is prevented
- [ ] Task list persists in localStorage
- [ ] All components use TypeScript interfaces for props
- [ ] `pnpm dev` runs without errors

## File Structure

```
codecamp-exercise-react/
├── README.md
├── LICENSE
├── .gitignore
├── package.json
├── next.config.ts
├── tsconfig.json
└── src/
    ├── app/
    │   ├── layout.tsx       # Root layout (provided)
    │   ├── page.tsx         # Main page (complete the TODOs)
    │   └── globals.css      # Global styles (provided)
    └── components/
        ├── task-card.tsx    # TODO: Build this component
        ├── task-list.tsx    # TODO: Build this component
        ├── add-task-form.tsx # TODO: Build this component
        └── task-stats.tsx   # TODO: Build this component
```

## Commands

```bash
pnpm install     # Install dependencies
pnpm dev     # Start dev server at http://localhost:3000
pnpm build   # Build for production
```
