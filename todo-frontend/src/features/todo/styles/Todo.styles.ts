import styled from "@emotion/styled";

export const Container = styled.div({
  width: "100vw",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

export const Wrapper = styled.div({
  maxWidth: "50vw",
  maxHeight: "90vh",
  overflowY: "hidden",
  margin: "40px auto",
  padding: 20,
  borderRadius: 16,
  backgroundColor: "#f4f6f8",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
});

export const ScrolContainer = styled.div({
  maxHeight: "calc(90vh - 130px)",
  overflowY: "auto",
  scrollbarColor: "#ccc transparent",
  scrollbarWidth: "thin",
});

export const InputWrapper = styled.div({
  display: "flex",
  gap: 10,
  marginBottom: 20,
});

export const Input = styled.input({
  flex: 1,
  padding: "10px 14px",
  border: "1px solid #ccc",
  borderRadius: 8,
  fontSize: 16,
});

export const Button = styled.button({
  padding: "10px 16px",
  borderRadius: 8,
  backgroundColor: "#0078D4",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#005A9E",
  },
});

export const List = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
});

export const Item = styled.div({
  width: "90%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 10,
  padding: "10px 14px",
  borderRadius: 8,
  backgroundColor: "#fff",
  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
});

export const Title = styled.span<{ completed: boolean }>(({ completed }) => ({
  textDecoration: completed ? "line-through" : "none",
  color: completed ? "#999" : "#333",
  flex: 1,
}));
