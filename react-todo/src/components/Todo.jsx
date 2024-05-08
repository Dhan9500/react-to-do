import React, { useState } from "react";

const Todo = ({ item }) => {
  const [hover, setHover] = useState(false);

  const OnClick = () => {
    setHover(!hover);
  };
  // console.log(hover)
  return (
    <div>
      <div
        onClick={OnClick}
        className={`${
          hover ? "bg-zinc-300" : "bg-zinc-300"
        }  w-36 rounded-md flex flex-col  items-center text-black border-y-violet-500`}
      >
        <h1 className="text-lg font-semibold">Details</h1>
        <h1 className="text-lg font-semibold">Id:{item.id}</h1>
        <div className="w-full h-36 overflow-auto text-wrap">
          <p className="text-center text-xs font-semibold leading-1 tracking-tight">
            {item.details}
          </p>
        </div>
        <div className="flex justify-evenly w-full bg-white text-xl font-semibold">
            <i className="ri-checkbox-line text-green-500"></i>
            <i className="ri-edit-box-line text-fuchsia-500"></i>
            <i className="ri-delete-bin-6-line text-red-500"></i>
        </div>
      </div>
    </div>
  );
};

export default Todo;
