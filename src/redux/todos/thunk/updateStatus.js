import { toggleState } from "../actions";

const updateStatus = (todoId, currentState) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        completed: !currentState,
      }),
    });
    dispatch(toggleState(todoId));
  };
};

export default updateStatus;
