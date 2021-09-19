import React from "react";
import "./Styles/Styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import { Menu } from "./Components/Menu";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/Home">
          <HomePage />
        </Route>
        <Route path="/About">
          <HomePage />
        </Route>
        <Route path="/History">
          <HomePage />
        </Route>
        <Route path="/Menu">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
