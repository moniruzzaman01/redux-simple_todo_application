import { useDispatch } from "react-redux";
import cancel from "../assets/images/cancel.png";
import {
  deleteTodo,
  selectedColors,
  toggleState,
} from "../redux/todos/actions";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  console.log(todo);
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        onClick={() => dispatch(toggleState(todo.id))}
        className="rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500"
      >
        <input type="checkbox" className="opacity-0 absolute rounded-full" />
        <svg
          className="hidden fill-current w-3 h-3 text-green-500 pointer-events-none"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>

      <div className={`select-none flex-1 ${todo.completed && "line-through"}`}>
        {todo.todo}
      </div>
      <div
        onClick={() => dispatch(selectedColors(todo.id, "green"))}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          todo.selectedColors.find((t) => t == "green") && "bg-green-500"
        }`}
      ></div>

      <div
        onClick={() => dispatch(selectedColors(todo.id, "yellow"))}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          todo.selectedColors.find((t) => t == "yellow") && "bg-yellow-500"
        }`}
      ></div>

      <div
        onClick={() => dispatch(selectedColors(todo.id, "red"))}
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          todo.selectedColors.find((t) => t == "red") && "bg-red-500"
        }`}
      ></div>

      <img
        onClick={() => dispatch(deleteTodo(todo.id))}
        src={cancel}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
      />
    </div>
  );
}
