import React from 'react'
import Todo from './Todo'
import { useContextData } from '../context/Context';
import CompletedToDo from './CompletedToDo';

const Completed = () => {
    const { data } = useContextData();
    const completed = data.filter((item) => item.isCompleted);
    return (
      <div className="h-[70%] flex flex-col items-center overflow-auto gap-3 drop-shadow-xl">
        {
            data.filter((item) =>item.isCompleted).map((i,index) =><CompletedToDo key={index} index={i.id} count={index} item={i} />)
        }
      </div>
    );
}

export default Completed


