import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div>
      <h3>TodoList</h3>
      <TodoList />
      <TodoList />
      <TodoList />
    </div>
  );
};

export default App;
