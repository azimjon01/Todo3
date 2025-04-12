import { Container, ScrolContainer, Wrapper } from "./styles/Todo.styles";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const Todo = () => (
  <Container>
    <Wrapper>
      <ScrolContainer>
        <TodoInput />
        <TodoList />
      </ScrolContainer>
    </Wrapper>
  </Container>
);

export default Todo;
