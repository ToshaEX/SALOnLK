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
import Booking from "./views/Booking/Booking";
import AddServices from "./views/Services/AddServices";
import "./App.css";

function App() {
  return (
    <div className="snap-y snap-mandatory snap-always">
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
            path="/register"
            component={() => (
              <>
                <Register />
              </>
            )}
          />
          <Route
            exact
            strict
            path="/services"
            component={() => (
              <>
                <Services />
              </>
            )}
          />
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
            path="/booking"
            component={() => (
              <>
                <Booking />
              </>
            )}
          />
          <Route
            exact
            strict
            path="/services/create"
            component={() => (
              <>
                <AddServices />
              </>
            )}
          />

          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
