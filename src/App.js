import React from "react";
import { Navbar } from "./Components/index";
import LandingPage from "./views/LandingPage/LandingPage";
import SignIn from "./views/Auth/SignIn/SignIn";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Services from "./views/Services/Services";
import Register from "./views/Auth/Register/Register";
import AboutUs from "./views/AboutUs/AboutUs";
import { useDispatch } from "react-redux";
import "./App.css";
import jwt_decode from "jwt-decode";
import ServiceHandler from "./views/Services/ServiceHandler";
import { setUser, setAccessToken } from "./features/user/user-slice";
import axios from "axios";

const token = localStorage.getItem("accessToken");
const clearToken =token===null? "":token.slice(1, token.length - 1);
console.log(clearToken);
axios.defaults.headers.common["Authorization"] = "Bearer " + clearToken;

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");
  console.log(typeof token);

  if (token) {
    const decoded = jwt_decode(token);
    dispatch(setUser(decoded));
    dispatch(setAccessToken(token));
  }

  return (
    <div className="snap-y snap-mandatory snap-always overflow-x-hidden">
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/home"
            component={() => (
              <>
                <LandingPage />
              </>
            )}
          />
          <Route
            path="/sign-in"
            component={() => (
              <>
                <SignIn />
              </>
            )}
          />
          <Route
            path="/sign-up"
            component={() => (
              <>
                <Register />
              </>
            )}
          />
          <Route exact strict path="/services" component={() => <Services />} />
          <Route
            exact
            strict
            path="/about-us"
            component={() => (
              <>
                <AboutUs />
              </>
            )}
          />

          <Route
            exact
            strict
            path="/manage"
            component={() => (
              <>
                <ServiceHandler />
              </>
            )}
          />
        </Switch>
        <Redirect to="/home" />
      </Router>
    </div>
  );
}

export default App;
