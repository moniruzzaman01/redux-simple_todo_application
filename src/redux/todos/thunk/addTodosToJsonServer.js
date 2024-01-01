import { addTodo } from "../actions";

const addTodosToJsonServer = (todoText) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
    });
    const todos = await response.json();
    console.log("res", todos, todoText);
    dispatch(addTodo(todoText));
  };
};

export default addTodosToJsonServer;
