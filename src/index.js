import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./custom.scss";
import AppRouter from "./navigation/AppRouter";
import { Reset } from "styled-reset";

const app = (
  <>
    <Reset />
    <AppRouter />
  </>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
