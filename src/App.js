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
  const [fromPublish, setFromPublish] = useState(false);

  const redirectToLogin = () => {
    setFromPublish(true);
    return <Redirect to="/login" />;
  };

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
          <Login setToken={setToken} fromPublish={fromPublish} />
        </Route>

        <Route path="/publish">
          {token ? <Publish token={token} /> : redirectToLogin}
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
