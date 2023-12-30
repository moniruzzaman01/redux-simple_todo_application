import {
  ADDTODO,
  TOGGLESTATE,
  COMPLETEALLTODOS,
  CLEARCOMPLETEDTODOS,
  SELECTEDCOLOR,
  DELETETODO,
} from "./actionTypes";

export const addTodo = (todoText) => {
  return {
    type: ADDTODO,
    payload: { todoText },
  };
};
export const toggleState = (todoId) => {
  return {
    type: TOGGLESTATE,
    payload: { todoId },
  };
};
export const completeAllTodos = () => {
  return {
    type: COMPLETEALLTODOS,
  };
};
export const clearCompletedTodos = () => {
  return {
    type: CLEARCOMPLETEDTODOS,
  };
};
export const selectedColor = (todoId, selectedColor) => {
  return {
    type: SELECTEDCOLOR,
    payload: { todoId, selectedColor },
  };
};
export const deleteTodo = (todoId) => {
  return {
    type: DELETETODO,
    payload: { todoId },
  };
};
