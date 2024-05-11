import React from "react";
import Todo from "./Todo";
import { useContext } from "react";
import { Context, useContextData } from "../context/Context";

const ToDoList = () => {
  const { data } = useContextData();
  return (
    <div className="h-[70%] flex flex-col items-center overflow-auto gap-3 drop-shadow-xl">
      {
            data.filter((item) =>item.isCompleted===false).map((i,index) =><Todo key={index} index={i.id} count={index} item={i} />)
        }
    </div>
  );
};

export default ToDoList;
