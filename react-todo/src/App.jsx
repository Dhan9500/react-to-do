import { useContext, useState } from "react";
import AddToDO from "./components/AddToDO";
import ToDoList from "./components/ToDoList";
import Copyright from "./components/Copyright";
import { Context } from "./context/Context";
import Completed from "./components/Completed";
import Routing from "./utilities/Routing";
function App() {
  
  return (
    <div className="w-full h-svh">
      <div className="container mx-auto w-[92%] pt-2 h-full">
        <div className="flex justify-center font-bold text-lg">
          To-Do Web App
        </div>
        <AddToDO/>
        <Routing/>
        <Copyright/>
      </div>
    </div>
  );
}

export default App;
