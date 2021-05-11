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
import Payment from "./containers/Payment";
import { useStripe } from "@stripe/react-stripe-js";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || 0);
  const [from, setFrom] = useState();

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
          <Login setToken={setToken} from={from} />
        </Route>

        <Route path="/publish">
          <Publish token={token} setFrom={setFrom} />
        </Route>

        <Route path="/payment">
          <Payment token={token} setFrom={setFrom} />
        </Route>

        <Route path="/">
          <Home token={token} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
