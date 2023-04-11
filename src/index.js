import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes";
import { UserProvider } from "./context/userContext";

const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
