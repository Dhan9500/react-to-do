import React from "react";
import Todo from "./Todo";

const ToDoList = ({todo}) => {
  const[data,setData]=todo;
  return (
    <div className="h-[70%] mt-3 flex flex-wrap justify-center overflow-auto gap-4">
    {
      data.map((item,index)=>{
        return <Todo key={index} item={item}/>
      })
    }
    </div>
  );
};

export default ToDoList;
