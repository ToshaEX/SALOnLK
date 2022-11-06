import "./App.css";
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

function App() {
  return (
    <div className="snap-y snap-mandatory snap-always">
      <Router>
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
                <Navbar />
                <SignIn />
              </>
            )}
          />
          <Route
            path="/register"
            component={() => (
              <>
                <Navbar />
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

          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
