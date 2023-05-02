import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRoute } from "./App";
import { Provider } from "react-redux";
import Store from "./redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
  <Provider store = {Store}>
    <RouterProvider router={AppRoute} />
    </Provider>
  </React.StrictMode>
);
