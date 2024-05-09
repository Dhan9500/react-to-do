import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import { ContextProv } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProv>
    <App />
  </ContextProv>
);
