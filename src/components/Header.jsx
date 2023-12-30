import notes from "../assets/images/notes.png";
import doubleTick from "../assets/images/double-tick.png";
import plus from "../assets/images/plus.png";
import {
  addTodo,
  clearCompletedTodos,
  completeAllTodos,
} from "../redux/todos/actions";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todo = e.target.todo.value;
    dispatch(addTodo(todo));
  };

  return (
    <div>
      <form
        onSubmit={handleAddTodo}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          name="todo"
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${plus})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          onClick={() => dispatch(completeAllTodos())}
          className="flex space-x-1 cursor-pointer"
        >
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li
          onClick={() => dispatch(clearCompletedTodos())}
          className="cursor-pointer"
        >
          Clear completed
        </li>
      </ul>
    </div>
  );
}
