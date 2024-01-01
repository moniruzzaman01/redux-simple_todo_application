import { useEffect } from "react";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter((todo) => {
          switch (filters.todoState) {
            case "incomplete":
              return todo.completed != true;
            case "complete":
              return todo.completed == true;
            default:
              return true;
          }
        })
        .filter((todo) => {
          if (filters.colors.length > 0) {
            return filters.colors.includes(todo.color);
          }
          return true;
        })
        .map((todo, key) => (
          <Todo key={key} todo={todo} />
        ))}
    </div>
  );
}
