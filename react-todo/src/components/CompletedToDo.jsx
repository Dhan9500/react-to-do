import React from "react";
import { useContextData } from "../context/Context";

const CompletedToDo = ({ index, item ,count}) => {
  const { removeTodo } = useContextData();

  return (
    <div>
      <div
        className={`w-80 h-20 rounded-md flex  ${
          item.isCompleted
            ? "bg-green-300"
            : "bg-gradient-to-r from-violet-300 to-fuchsia-300"
        } items-center text-white from-neutral-400 font-light`}
      >
        <div className="w-full overflow-auto text-wrap ">
          <p className=" line-through text-xl ml-3 font-semibold leading-1 tracking-tight text-black">
            {count + 1}. {item.details}
          </p>
        </div>
        <div className="flex flex-col justify-evenly rounded-lg h-20 bg-fuchsia-100 text-xl font-semibold ">
          <i
            onClick={() => removeTodo(index)}
            className="ri-delete-bin-6-line text-red-500 transition ease-in-out delay-15 hover:-translate-y-0.5 hover:scale-110 hover:bg-fuchsia-100 duration-30 drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CompletedToDo;
