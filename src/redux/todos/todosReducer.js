import {
  ADDTODO,
  TOGGLESTATE,
  COMPLETEALLTODOS,
  CLEARCOMPLETEDTODOS,
  SELECTEDCOLOR,
  DELETETODO,
} from "./actionTypes";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return [
        ...state,
        {
          id: state.length,
          todo: action.payload.todoText,
          completed: false,
          color: "",
        },
      ];
    case TOGGLESTATE: {
      const newState = state.map((todo) => {
        if (todo.id == action.payload.todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newState;
    }
    case COMPLETEALLTODOS: {
      const newState = state.map((todo) => {
        return { ...todo, completed: true };
      });
      return newState;
    }
    case CLEARCOMPLETEDTODOS: {
      const newState = state.filter((todo) => {
        if (todo.completed != true) {
          return todo;
        }
      });
      return newState;
    }
    case SELECTEDCOLOR: {
      const newState = state.map((todo) => {
        if (todo.id == action.payload.todoId) {
          console.log(action.payload.selectedColor);
          return {
            ...todo,
            color: action.payload.selectedColor,
          };
        }
        return todo;
      });
      return newState;
    }
    case DELETETODO: {
      const newState = state.filter((todo) => {
        if (todo.id != action.payload.todoId) {
          return todo;
        }
      });
      return newState;
    }
    default:
      return [...state];
  }
};

export default todosReducer;
