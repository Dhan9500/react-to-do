import { useContext, useState } from "react";
import { Context, useContextData } from "../context/Context";
import { Link, NavLink } from "react-router-dom";

export default function AddToDO() {
  const { handleAddTodo, input, handleInput, editItem, error } =
    useContextData();
  const { isEdit } = editItem;
  return (
    <div className="flex justify-center mt-3 pb-2">
      <form
        className="flex flex-col justify-center items-center"
        action=""
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className="placeholder-black px-10 py-1 text-center rounded-lg bg-fuchsia-300 text-black font-semibold outline-purple-500 drop-shadow-xl"
          type="text"
          placeholder="Type Your To-Do"
          autoFocus
          value={input}
          onChange={handleInput}
          id="inp"
        />
        <h1 className="text-red-500 mt-1 h-7 transition ease-in-out drop-shadow-xl">
          {input.length === 0 && error ? "Please Type Your To-Do....." : ""}
        </h1>
        <div className="flex items-center gap-5">
        <nav className="bg-red-500 ml-1 mt-2 py-1 rounded-md px-5 text-white font-semibold transition ease-in-out duration-700 hover:-translate-y-0.5 hover:scale-110 hover:bg-red-700 duration-30 drop-shadow-xl">
          <Link to="/">Active</Link>
        </nav>
        <button
          type="submit"
          onClick={(e) => {
            handleAddTodo(input, editItem);
          }}
          className="mt-2 ml-1 w-28  py-1 px-2 rounded-full  text-white font-semibold transition ease-in-out duration-700 bg-fuchsia-500 hover:-translate-y-0.5 hover:scale-110 hover:bg-fuchsia-700 duration-30 drop-shadow-xl"
        >
          {isEdit ? "Save" : "Add-To-Do"}
        </button>
        <nav className="bg-green-500  mt-2 py-1 rounded-md px-5 text-white font-semibold transition ease-in-out duration-700 hover:-translate-y-0.5 hover:scale-110 hover:bg-green-700 duration-30 drop-shadow-xl">
          <Link to="/done">Done</Link>
        </nav>
        </div>
      </form>
    </div>
  );
}
