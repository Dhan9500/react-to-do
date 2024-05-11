import React, { createContext, useContext, useEffect, useState } from "react";

export const Context = createContext(null);

export const useContextData = () => {
  const context = useContext(Context);
  return context;
};

export const ContextProv = (props) => {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    if (data.length >= 0) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);

  const [input, setInput] = useState("");
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const [error, setError] = useState(false);
  const handleAddTodo = (input, isEd) => {
    if (isEd.isEdit) {
      if (input.length === 0) {
        console.log("Please Type Your Todo....Save...");
        setError(true);
      } else {
        setData(
          data.map((item, i) =>
            isEd.index === item.id
              ? { ...item, details: input, isEdit: false }
              : { ...item }
          )
        );
        setEditItem(false);
        setInput("");
        setError(false);
      }
    } else {
      if (input.length === 0) {
        console.log("Please Type Your Todo....");
        setError("Please Type Your Todo....");
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
        setError(false);
      }
    }
  };

  const removeTodo = (i) => {
    setData(
      data.filter((item, index) => {
        if (i === item.id) {
          return false;
        } else {
          return true;
        }
      })
    );
    setInput("");
    setEditItem(false);
  };
  const [editItem, setEditItem] = useState(false);
  const edit = (i, itm) => {
    setData(
      data.map((item, index) =>
        i === item.id ? { ...item, isEdit: true } : { ...item }
      )
    );
    setEditItem({ ...itm, isEdit: true, index: i });
    setInput(itm.details);
    document.getElementById("inp").focus();
  };
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);
  const completeTodo = (i) => {
    setData(
      data.map((item, index) =>
        i === item.id ? { ...item, isCompleted: true } : { ...item }
      )
    );
  };

  return (
    <Context.Provider value={{data,setData,removeTodo,handleAddTodo,edit,editItem,input,handleInput,completeTodo,error,}}>
      {props.children}
    </Context.Provider>
  );
};
