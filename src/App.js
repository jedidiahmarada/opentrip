import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePages";
import Header from "./components/layouts/Header";
import RegisPage from "./components/layouts/RegisPage";
import Login from "./components/layouts/Login";
import Destination from "./components/layouts/Destination";
import RegisUser from "./components/layouts/registers/RegisUser";
import RegisHoster from "./components/layouts/registers/RegisHoster";
import Footer from "./components/layouts/Footer";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/destination" component={Destination} />
        <Route exact path="/registration" component={RegisPage} />
        <Route exact path="/regisuser" component={RegisUser} />
        <Route exact path="/regishoster" component={RegisHoster} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
