import { STATUSCHANGED, COLORCHANGED } from "./actionTypes";

const initialState = {};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        todoState: action.payload.status,
      };
    case COLORCHANGED:
      switch (action.payload.changeType) {
        case "add":
          return {
            ...state,
            colors: [...state.colors, action.payload.color],
          };
        case "remove":
          return {
            ...state,
            colors: state.colors.filter(
              (color) => color != action.payload.color
            ),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default filterReducer;
