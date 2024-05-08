import React from "react";
import Todo from "./Todo";

const ToDoList = () => {
  return (
    <div className=" h-[80%] mt-3 flex flex-wrap justify-center items-center overflow-auto gap-5">
    <Todo/>
    <Todo/>
    <Todo/>
    <Todo/>
    <Todo/>
    <Todo/>
    <Todo/>
    </div>
  );
};

export default ToDoList;
