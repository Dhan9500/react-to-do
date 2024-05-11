import React from "react";
import Todo from "./Todo";
import { useContext } from "react";
import { Context, useContextData } from "../context/Context";

const ToDoList = () => {
  const { data } = useContextData();
  return (
    <div className="h-[70%] flex flex-col items-center overflow-auto gap-3 drop-shadow-xl">
      {data.map((item, index) => {
        return <Todo key={index} index={index} item={item} />;
      })}
    </div>
  );
};

export default ToDoList;
