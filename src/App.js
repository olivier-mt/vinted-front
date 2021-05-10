import "./App.css";
import Home from "./containers/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import { useState } from "react";
import Header from "./Components/Header";
import Cookies from "js-cookie";
import Login from "./containers/Login";
import Publish from "./containers/Publish";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || 0);

  return (
    <Router>
      <Header token={token} setToken={setToken} />

      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>

        <Route path="/signup">
          <Signup setToken={setToken} token={token} />
        </Route>

        <Route path="/login">
          <Login setToken={setToken} />
        </Route>

        <Route path="/publish">
          {token ? <Publish /> : <Redirect to="/login" />}
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
