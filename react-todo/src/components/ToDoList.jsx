import React from "react";
import Todo from "./Todo";
import { useContext } from "react";
import { Context, useContextData } from "../context/Context";

const ToDoList = () => {
  // const{data}=useContext(Context);
  const{data}=useContextData();
  return (
    <div className="h-[70%] mt-3 flex flex-wrap justify-center overflow-auto gap-4">
    {
      data.map((item,index)=>{
        return <Todo key={index} index={index} item={item} />
      })
    }
    </div>
  );
};

export default ToDoList;
