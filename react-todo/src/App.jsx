import AddToDO from "./components/AddToDO";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <div className="w-full h-svh">
      <div className="container mx-auto w-[92%] pt-2 h-full">
        <div className="flex justify-center font-bold text-lg">
          To-Do Web App
        </div>
        <AddToDO/>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
