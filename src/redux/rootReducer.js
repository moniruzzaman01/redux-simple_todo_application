import { combineReducers } from "redux";
import todosReducer from "./todos/todosReducer";
import filterReducer from "./filters/filtersReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
});

export default rootReducer;
