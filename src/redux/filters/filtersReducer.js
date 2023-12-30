import { STATUSCHANGED, COLORCHANGED } from "./actionTypes";

const initialState = [];

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return [...state];
    case COLORCHANGED:
      return;
    default:
      return;
  }
};

export default filterReducer;
