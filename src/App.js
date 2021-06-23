import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePages";

const App = () => (
  <BrowserRouter>
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
