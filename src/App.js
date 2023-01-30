import React from "react";
import { Navbar, SideMenu } from "./Components/index";
import LandingPage from "./views/LandingPage/LandingPage";
import SignIn from "./views/Auth/SignIn/SignIn";
import { createBrowserHistory } from "history";
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
import EmployeeHandler from "./views/Auth/Employee/EmployeeHandler";
import Dashboard from "./views/Manage/Dashboard";
import Booking from "./views/Booking/Booking";
import ManageCharts from "./views/Manage/Charts/ManageCharts";
import AppointmentHandler from "./views/Manage/AppointmentHandler";

const history = createBrowserHistory();

const token = localStorage.getItem("accessToken");
const clearToken = token === null ? "" : token.slice(1, token.length - 1);
console.log(clearToken);
axios.defaults.headers.common["Authorization"] = "Bearer " + clearToken;
axios.defaults.baseURL = process.env.REACT_APP__API_BASE_URL;

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("accessToken");

  if (token) {
    const decoded = jwt_decode(token);
    dispatch(setUser(decoded));
    dispatch(setAccessToken(token));
  }

  return (
    <div className="snap-y snap-mandatory snap-always overflow-x-clip">
      <Router history={history}>
        {!token ? <Redirect to="/sign-in" /> : <Redirect to="/home" />}
        <Switch>
          <Route
            path="/home"
            component={() => (
              <>
                <Navbar />
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
          <Route
            exact
            strict
            path="/services"
            component={() => (
              <>
                <Navbar />
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
                <Navbar />
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
                <Navbar />
                <div className="flex">
                  <SideMenu />
                  <Dashboard />
                </div>
              </>
            )}
          />

          <Route
            exact
            strict
            path="/service-handler"
            component={() => (
              <>
                <Navbar />
                <div className="flex">
                  <SideMenu />
                  <ServiceHandler />
                </div>
              </>
            )}
          />

          <Route
            exact
            strict
            path="/employee-handler"
            component={() => (
              <>
                <Navbar />
                <div className="flex">
                  <SideMenu />
                  <EmployeeHandler />
                </div>
              </>
            )}
          />

          <Route
            exact
            strict
            path="/chart-handler"
            component={() => (
              <>
                <Navbar />
                <div className="flex">
                  <SideMenu />
                  <ManageCharts />
                </div>
              </>
            )}
          />

          <Route
            exact
            strict
            path="/appointment-handler"
            component={() => (
              <>
                <Navbar />
                <div className="flex">
                  <SideMenu />
                  <AppointmentHandler />
                </div>
              </>
            )}
          />

          <Route
            path="/booking"
            component={() => (
              <>
                <Navbar />
                <Booking />
              </>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
