import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";

export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const todosLeft = () => {
    const left = todos.filter((todo) => todo.completed != true).length;
    switch (left) {
      case 0:
        return "No task";
      case 1:
        return "1 task";
      default:
        return `${left} tasks`;
    }
  };
  const handleStatus = (status) => {
    dispatch(statusChanged(status));
  };
  const handleColor = (color) => {
    dispatch(
      colorChanged(color, filters.colors.includes(color) ? "remove" : "add")
    );
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{todosLeft(todos)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatus("all")}
          className={`cursor-pointer ${
            filters.todoState == "all" && "font-bold"
          } `}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatus("incomplete")}
          className={`cursor-pointer ${
            filters.todoState == "incomplete" && "font-bold"
          }`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatus("complete")}
          className={`cursor-pointer ${
            filters.todoState == "complete" && "font-bold"
          }`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColor("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filters.colors.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => handleColor("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filters.colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => handleColor("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filters.colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
}
