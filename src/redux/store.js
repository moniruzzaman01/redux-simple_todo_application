import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
// import xx from "redux-thunk";

const thunk = (store) => (next) => async (action) => {
  if (typeof action == "function") {
    action(store.dispatch, store.getState);
    return;
  }
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
