import React from 'react'

const Todo = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-500 mt-3 to-fuchsia-500 h-full w-36 rounded-md flex flex-col  items-center text-white">
        <h1 className="text-lg font-semibold">Todo</h1>
        <p className="text-center text-xs font-semibold leading-1 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, soluta.</p>
        <button className="bg-red-500 mt-2 mb-2 rounded-lg p-1 text-white" >Remove It</button>
    </div>
    </div>
  )
}

export default Todo
