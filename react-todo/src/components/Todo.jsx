import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../context/Context";

const Todo = ({ item,index }) => {

const{removeTodo,edit}=useContext(Context);


  return (
    <div>
      <div className="w-36 rounded-md flex flex-col bg-zinc-300  items-center text-black border-y-violet-500">
        <h1 className="text-lg font-semibold">Details</h1>
        <h1 className="text-lg font-semibold">Id:{item.id}</h1>
        <div className="w-full h-36 overflow-auto text-wrap">
          <p className="text-center text-xs font-semibold leading-1 tracking-tight">
            {item.details}
          </p>
        </div>
        <div className="flex justify-evenly w-full bg-white text-xl font-semibold">
          <i className="ri-checkbox-line text-green-500" />
          <i
            onClick={() =>edit(index,item)}
            className="ri-edit-box-line text-fuchsia-500"
          />
          <i onClick={()=>removeTodo(index)} className="ri-delete-bin-6-line text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
