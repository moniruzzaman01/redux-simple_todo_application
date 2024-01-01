import { selectedColor } from "../actions";

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        color,
      }),
    });
    dispatch(selectedColor(todoId, color));
  };
};

export default updateColor;
