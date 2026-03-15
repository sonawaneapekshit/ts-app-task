import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const tasks = [
    { id: 1, title: 'Dragon Ball Z' },
    { id: 1, title: 'One Piece' },
    { id: 1, title: 'Attack on Titans' },
  ];

  return (
    <div>
      <h3>TodoList</h3>
      <TodoList items={tasks} />
      <TodoList items={tasks} />
      <TodoList items={tasks} />
    </div>
  );
};

export default App;
