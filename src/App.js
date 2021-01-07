import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpDonor from "./sign-up-donor";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/sign-up-donor" component={SignUpDonor} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
