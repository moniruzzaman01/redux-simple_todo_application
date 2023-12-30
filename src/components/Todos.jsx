import Todo from "./Todo";
import { useSelector } from "react-redux";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  console.log(todos, filters);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.map((todo, key) => (
        <Todo key={key} todo={todo} />
      ))}
    </div>
  );
}
