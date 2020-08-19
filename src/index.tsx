import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./assets/css/material-dashboard.css";
import App from "./layouts/App";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/app" component={App} />
      <Redirect from="/" to="/app/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();
