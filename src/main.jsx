import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DonadoresApp } from "./DonadoresApp";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ store}>
        <BrowserRouter>
            <DonadoresApp />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
