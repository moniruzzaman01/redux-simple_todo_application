import { deleteTodo } from "../actions";

const deleteFromServer = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    dispatch(deleteTodo(todoId));
  };
};

export default deleteFromServer;
