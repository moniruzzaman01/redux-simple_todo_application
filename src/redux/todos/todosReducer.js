import {
  ADDTODO,
  TOGGLESTATE,
  COMPLETEALLTODOS,
  CLEARCOMPLETEDTODOS,
  SELECTEDCOLORS,
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
          selectedColors: [],
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
    case SELECTEDCOLORS: {
      // const targetTodo = state.find(todo => todo.id == action.payload.todoId)
      // targetTodo.selectedColors.push(action.payload.selectedColor)
      const newState = state.map((todo) => {
        if (todo.id == action.payload.todoId) {
          return {
            ...todo,
            selectedColors: [
              ...todo.selectedColors,
              action.payload.selectedColor,
            ],
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
