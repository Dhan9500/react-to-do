import { useContext, useState } from "react";
import { Context } from "../context/Context";

export default function AddToDO() {
  const{handleAddTodo,input,handleInput,editItem}=useContext(Context);
  const{isEdit}=editItem;
  return (
    <div className="flex justify-center mt-3 pb-2">
      <form className="flex flex-col justify-center items-center" action="" onSubmit={(event)=>event.preventDefault()}>
        <input
          className="placeholder-green-300 px-10 py-1 text-center rounded-lg bg-purple-400 text-white outline-purple-500"
          type="text"
          placeholder="Type Your To-Do"
          autoFocus
          value={input}
          onChange={handleInput}
          id="inp"
        />
        <button type="submit" onClick={(e)=>{
          handleAddTodo(input,editItem)
        }} className="mt-2  w-1/2 py-1 rounded-full bg-red-500 text-white font-semibold">{isEdit?"Save":"Add-To-Do"}</button>
      </form>
    </div>
  );
}
