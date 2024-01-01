import { selectedColor } from "../actions";

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        color,
      }),
    });
    const todos = await response.json();
    console.log("res", todos, todoId);
    dispatch(selectedColor(todoId, color));
  };
};

export default updateColor;
