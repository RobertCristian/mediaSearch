import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopnavBar from "./TopbarNav";
import Home from "./Home";
import Trending from "./Trending";
import PageNotFound from "./PageNotFound";
import SignUp from "./SignUp";

const Router = () => (
  <BrowserRouter>
    <div>
      <TopnavBar />
      <div className="body">
        <Switch>
          {/* Home Page Route */}
          <Route exact path="/" component={Home} />

          {/* Trending Media Page */}
          <Route path="/trending" component={Trending} />

          {/* Signup Page */}
          <Route path="/signup" component={SignUp} />

          {/* 404 Not Found Page Route */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default Router;
