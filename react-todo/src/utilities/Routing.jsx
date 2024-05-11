import React from "react";
import { Route, Routes } from "react-router-dom";
import Completed from "../components/Completed";
import ToDoList from "../components/ToDoList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<ToDoList />} />
      <Route path="/done" element={<Completed />} />
    </Routes>
  );
};
export default Routing;
