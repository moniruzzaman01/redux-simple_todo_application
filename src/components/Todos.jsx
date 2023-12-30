import Todo from "./Todo";
import { useSelector } from "react-redux";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  console.log(filters);
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
