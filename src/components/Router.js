import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopnavBar from "./TopbarNav";
import Home from "./Home";
import Trending from "./Trending";
import PageNotFound from "./PageNotFound";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import { withAuthentication } from "./Session";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopnavBar />
          <div className="body min-h-screen bg-grey-darkest">
            <Switch>
              {/* Home Page Route */}
              <Route exact path="/" component={Home} />

              {/* Trending Media Page */}
              <Route path="/trending" component={Trending} />

              {/* Signin Page */}
              <Route path="/login" component={SignIn} />

              {/* Signup Page */}
              <Route path="/signup" component={SignUp} />

              {/* 404 Not Found Page Route */}
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withAuthentication(Router);
