import "./App.css";
import Home from "./containers/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
