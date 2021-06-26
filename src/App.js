import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePages";
import Header from "./components/layouts/Header";
import RegisPage from "./components/layouts/RegisPage";
import Login from "./components/layouts/Login";
import Destination from "./components/layouts/Destination";
import RegisUser from "./components/layouts/registers/RegisUser";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/destination" component={Destination} />
        <Route exact path="/registration" component={RegisPage} />
        <Route exact path="/regisuser" component={RegisUser} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
