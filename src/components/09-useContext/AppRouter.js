import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={HomeScreen}></Route>
            <Route path="/about" exact component={AboutScreen}></Route>
            <Route path="/login" exact component={LoginScreen}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
