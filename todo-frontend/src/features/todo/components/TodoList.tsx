import { useTodoStore } from "../../../store/todoStore";
import TodoItem from "./TodoItem";
import { List } from "../styles/Todo.styles";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;
