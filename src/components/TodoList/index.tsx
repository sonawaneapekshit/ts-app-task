import './index.css';
import TodoItem from './TodoItem';

interface TodoItemProps {
  id: number;
  title: string;
}
interface TodoListProps {
  items: TodoItemProps[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { items } = props;

  return (
    <>
      <ul>
        {items &&
          items.map((item, index) => (
            <TodoItem key={index} id={item.id} title={item.title} />
          ))}
      </ul>
    </>
  );
};

export default TodoList;
