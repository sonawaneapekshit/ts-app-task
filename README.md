# Todo List App

A simple Todo List application built with React, TypeScript, and Vite.

## Tech Stack

- **React** 19 with React Compiler enabled
- **TypeScript** 5.9
- **Vite** 8 (dev server & build tool)
- **ESLint** for linting

## Project Structure

```text
src/
├── App.tsx                          # Root component, renders TodoList with task data
├── App.css
├── main.tsx                         # Entry point
└── components/
    └── TodoList/
        ├── index.tsx                # Renders a list of TodoItems
        ├── index.css
        └── TodoItem/
            ├── index.tsx            # Renders a single todo item
            └── index.css
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Bun](https://bun.sh/) (recommended) or npm

### Install Dependencies

```bash
bun install
```

### Development

```bash
bun run dev
```

### Build

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

### Lint

```bash
bun run lint
```
