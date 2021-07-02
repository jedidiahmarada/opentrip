import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePages";
import Header from "./components/layouts/Header";
import RegisPage from "./components/layouts/RegisPage";
import Login from "./components/layouts/Login";
import DestinationPages from "./components/pages/DestinationPages";
import DestinationDetail from "./components/layouts/desdetail/DestinationDetail";
import RegisUser from "./components/layouts/registers/RegisUser";
import RegisHoster from "./components/layouts/registers/RegisHoster";
import Footer from "./components/layouts/Footer";
import BillingDet from "./components/layouts/checkout/BillingDet";
import Order from "./components/layouts/checkout/Order";
import Payment from "./components/layouts/checkout/Payment";
import OrderReceived from "./components/layouts/order/OrderReceived";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/destination" component={DestinationPages} />
        <Route exact path="/desdetail" component={DestinationDetail} />
        <Route exact path="/registration" component={RegisPage} />
        <Route exact path="/regisuser" component={RegisUser} />
        <Route exact path="/regishoster" component={RegisHoster} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/checkout" component={BillingDet} />
        <Route exact path="/checkout/order" component={Order} />
        <Route exact path="/checkout/order/payment" component={Payment} />
        <Route exact path="/oreceived" component={OrderReceived} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
