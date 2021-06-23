import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Profile from "routes/Profile";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedin, userObj, refreshUser }) => {
  return (
    <Router>
      {isLoggedin && <Navigation userObj={userObj} />}
      <Switch>
        {isLoggedin ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "0",
              marginTop: 80,
            }}
          >
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
            {/* <Redirect from="*" to="/" />
            이외의 다른 url 주소를 "/"로 리다이렉트함 */}
          </div>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
