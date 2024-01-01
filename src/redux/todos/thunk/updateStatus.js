import { toggleState } from "../actions";

const updateStatus = (todoId, currentState) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        completed: !currentState,
      }),
    });
    const todos = await response.json();
    console.log("res", todos, todoId);
    dispatch(toggleState(todoId));
  };
};

export default updateStatus;
