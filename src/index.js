import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
// import { subscribeUser } from "./subscription";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// subscribeUser();
serviceWorker.register();
