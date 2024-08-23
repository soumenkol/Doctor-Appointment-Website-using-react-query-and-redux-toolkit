import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Provider } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./Redux-Toolkit/Store/store.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
export const queyClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queyClient}>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
