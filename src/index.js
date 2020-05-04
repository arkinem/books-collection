import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "./custom.scss";
import AppRouter from "./navigation/AppRouter";
import configureStore from "./store/configureStore";

const store = configureStore();

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
