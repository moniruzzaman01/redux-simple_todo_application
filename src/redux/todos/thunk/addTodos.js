import { loadTodo } from "../actions";

const addTodos = ({ todoText }) => {
  async (dispatch) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      headers: {
        "contest-type": "application/json",
      },
      body: JSON.stringify({
        text: todoText,
      }),
    });
    const todos = await response.json();
    dispatch(loadTodo(todos));
  };
};

export default addTodos;
