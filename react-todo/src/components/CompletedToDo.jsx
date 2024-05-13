import React from "react";
import { useContextData } from "../context/Context";

const CompletedToDo = ({ index, item ,count}) => {
  const { removeTodo } = useContextData();

  return (
    <div>
      <div
        className={`w-80 h-20 rounded-md flex items-center text-white font-light bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90%`}
      >
        <div className="w-full overflow-auto text-wrap ">
          <p className=" line-through text-xl ml-3 font-semibold leading-1 tracking-tight text-black">
            {count + 1}. {item.details}
          </p>
          <h2 className="italic leading-1 tracking-tight text-black ml-3">Completed At: {item.date}</h2>
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
