import React, { createContext, useState } from "react";

export const Context = createContext(null);

export const ContextProv = (props) => {
  const [data, setData] = useState([]);

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
  };

  return (
    <Context.Provider
      value={{
        data,
        setData,
        removeTodo,
        handleAddTodo,
        edit,
        editItem,
        input,
        handleInput,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
