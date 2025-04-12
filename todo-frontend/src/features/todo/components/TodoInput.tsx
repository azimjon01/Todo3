import { useState } from "react";
import { useTodoStore } from "../../../store/todoStore";
import { InputWrapper, Input, Button } from "../styles/Todo.styles";

const TodoInput = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };

  return (
    <InputWrapper>
      <Input
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Yangi vazifa kiriting..."
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <Button onClick={handleAdd}>Qo‘shish</Button>
    </InputWrapper>
  );
};

export default TodoInput;
