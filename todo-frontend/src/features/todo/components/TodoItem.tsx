import { Todo } from "../types/todo.types";
import { useTodoStore } from "../../../store/todoStore";
import { Item, Title, Button } from "../styles/Todo.styles";
import { useState } from "react";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const { toggleTodo, removeTodo } = useTodoStore();

  return (
    <Item>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <Title completed={todo.completed}>{todo.title}</Title>
      <Button onClick={() => removeTodo(todo.id)}>🗑</Button>
    </Item>
  );
};

export default TodoItem;
