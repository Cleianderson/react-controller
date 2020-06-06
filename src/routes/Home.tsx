import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/Home";
import Warns from "../pages/Warns";
import Suggestions from "../pages/Suggestions";
import Answers from "../pages/Answers";
import Weeks from "../pages/Weeks";

function Home() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <HomePage />
        </Route>
        <Route path="/warns">
          <Warns />
        </Route>
        <Route path="/suggestions">
          <Suggestions />
        </Route>
        <Route path="/answers">
          <Answers />
        </Route>
        <Route path="/weeks">
          <Weeks />
        </Route>
      </Switch>
    </Router>
  );
}

export default Home;
