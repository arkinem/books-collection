import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import BooksPage from "../pages/BooksPage";
import NotFoundPage from "../pages/NotFoundPage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/books?page=1" />
      </Route>
      <Route path="/books">
        <BooksPage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  </BrowserRouter>
);
