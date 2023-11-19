import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";


function App() {
 return (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path = "/actors">
          <Actors />
        </Route>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/movies">
          <Movies />
        </Route>
      </Switch>
    </div>
  </Router>
 )
}

export default App;
