import {
  ADDTODO,
  COMPLETETODO,
  COMPLETEALLTODOS,
  CLEARCOMPLETEDTODOS,
  SELECTEDCOLORS,
  DELETETODO,
} from "./actionTypes";

export const addTodo = (todoText) => {
  return {
    type: ADDTODO,
    payload: { todoText },
  };
};
export const completeTodo = (todoId) => {
  return {
    type: COMPLETETODO,
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
export const selectedColors = (selectedColor) => {
  return {
    type: SELECTEDCOLORS,
    payload: { selectedColor },
  };
};
export const deleteTodo = (todoId) => {
  return {
    type: DELETETODO,
    payload: { todoId },
  };
};
