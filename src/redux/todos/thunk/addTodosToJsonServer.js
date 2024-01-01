import { addTodo } from "../actions";

const addTodosToJsonServer = (todoText) => {
  return async (dispatch) => {
    await fetch("http://localhost:9000/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
    });
    dispatch(addTodo(todoText));
  };
};

export default addTodosToJsonServer;
