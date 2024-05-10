import React, { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

export const ContextProv = (props) => {
  const [data, setData] = useState(()=>{
    const localData=localStorage.getItem('data');
    return localData?JSON.parse(localData):[];
  });
  useEffect(()=>{
    if(data.length>0){
      localStorage.setItem('data',JSON.stringify(data));
    }
  },[data]);

  const [input, setInput] = useState("");
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleAddTodo = (input, isEd) => {
    if (isEd.isEdit) {
      if (input.length === 0) {
        console.log("Please Type Your Todo....Save...");
      } else {
        setData(
          data.map((item, i) =>
            isEd.index === i
              ? { ...item, details: input, isEdit: false }
              : { ...item }
          )
        );
        setEditItem(false);
        setInput("");
      }
    } else {
      if (input.length === 0) {
        console.log("Please Type Your Todo....");
      } else {
        setData([
          ...data,
          {
            id: data.length + 1,
            details: input,
            isCompleted: false,
            isEdit: false,
          },
        ]);
        setInput("");
      }
    }
  };

  const removeTodo = (i) => {
    setData(
      data.filter((item, index) => {
        if (i === index) {
          return false;
        } else {
          return true;
        }
      })
    );
    setInput('');
    setEditItem(false);
  };
  const [editItem, setEditItem] = useState(false);
  const edit = (i, itm) => {
    setData(
      data.map((item, index) =>
        i === index ? { ...item, isEdit: true } : { ...item }
      )
    );
    setEditItem({ ...itm, isEdit: true, index: i });
    setInput(itm.details);
    document.getElementById("inp").focus();
  };

  const completeTodo=(i)=>{
    setData(data.map((item,index)=>i===index?{...item,isCompleted:true}:{...item}))
  };
  // console.log(data)
  return (
    <Context.Provider value={{data,setData,removeTodo,handleAddTodo,edit,editItem,input,handleInput,completeTodo}}>
      {props.children}
    </Context.Provider>
  );
};
