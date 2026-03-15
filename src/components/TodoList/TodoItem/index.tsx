import React from 'react';
import './index.css';

interface TodoItemProps {
  id: number,
  title: string;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { id, title } = props;
  return <li key={id}>{title}</li>;
};

export default TodoItem;
