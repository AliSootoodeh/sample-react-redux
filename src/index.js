import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import LoadingBar from "react-redux-loading-bar";
import reducers from "./reducers";
import "./index.css";
import middleware from "./middleware";

const store = createStore(reducers, middleware);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <LoadingBar />
  </Provider>
);
