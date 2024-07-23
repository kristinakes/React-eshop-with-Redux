import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import reduxStore from "./store/reduxStore.jsx";

import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
);
