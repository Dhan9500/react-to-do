import { useState } from "react";
import AddToDO from "./components/AddToDO";
import ToDoList from "./components/ToDoList";
import Copyright from "./components/Copyright";
function App() {

  const [data,setData]=useState([{
    id:1,
    details:"I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.",
    isCompleted:false,
    isSelected:false
  },{
    id:2,
    details:"I have to create the Todo2.",
    isCompleted:false,
    isSelected:false
  },{
    id:3,
    details:"I have to create the Todo3.",
    isCompleted:false,
    isSelected:false
  },{
    id:4,
    details:"I have to create the Todo1.",
    isCompleted:false,
    isSelected:false
  },{
    id:5,
    details:"I have to create the Todo2.",
    isCompleted:false,
    isSelected:false
  },{
    id:6,
    details:"I have to create the Todo3.",
    isCompleted:false,
    isSelected:false
  },{
    id:7,
    details:"I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.I have to create the Todo1.",
    isCompleted:false,
    isSelected:false
  },{
    id:8,
    details:"I have to create the Todo2.",
    isCompleted:false,
    isSelected:false
  },{
    id:9,
    details:"I have to create the Todo3.",
    isCompleted:false,
    isSelected:false
  },{
    id:10,
    details:"I have to create the Todo1.",
    isCompleted:false,
    isSelected:false
  },{
    id:11,
    details:"I have to create the Todo2.",
    isCompleted:false,
    isSelected:false
  },{
    id:12,
    details:"I have to create the Todo3.",
    isCompleted:false,
    isSelected:false
  }])

  return (
    <div className="w-full h-svh">
      <div className="container mx-auto w-[92%] pt-2 h-full">
        <div className="flex justify-center font-bold text-lg">
          To-Do Web App
        </div>
        <AddToDO todo={[data,setData]}/>
        <ToDoList todo={[data,setData]}/>
        <Copyright/>
      </div>
    </div>
  );
}

export default App;
