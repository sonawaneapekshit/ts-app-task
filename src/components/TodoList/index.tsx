import './index.css';
import TodoItem from './TodoItem';
const TodoList: React.FC = () => {
  return (
    <>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </>
  );
};

export default TodoList;
