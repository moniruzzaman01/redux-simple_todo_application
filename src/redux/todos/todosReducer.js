import {
  ADDTODO,
  COMPLETETODO,
  COMPLETEALLTODOS,
  CLEARCOMPLETEDTODOS,
  SELECTEDCOLORS,
  DELETETODO,
} from "./actionTypes";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return [...state];
    case COMPLETETODO:
      return [...state];
    case COMPLETEALLTODOS:
      return [...state];
    case CLEARCOMPLETEDTODOS:
      return [...state];
    case SELECTEDCOLORS:
      return [...state];
    case DELETETODO:
      return [...state];
    default:
      return [...state];
  }
};

export default todosReducer;
