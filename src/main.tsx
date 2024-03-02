import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import RegisterContextProvider from "./app/fragments/auth/Register/context";
import { Provider } from "react-redux";
import store from "./lib/redux/store";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RegisterContextProvider>
        <RouterProvider router={router} />
      </RegisterContextProvider>
    </Provider>
  </React.StrictMode>
);
