import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePages";
import Header from "./components/layouts/Header";
import RegisPage from "./components/layouts/RegisPage";
import Login from "./components/layouts/Login";
<<<<<<< HEAD
import DestinationDetailAtas from "./components/layouts/DestinationDetailAtas";
=======
<<<<<<< HEAD
import DestinationPages from "./components/pages/DestinationPages";
=======
import DestinationDetailAtas from "./components/layouts/DestinationDetailAtas";
>>>>>>> 4f25697edb46b8d022bafd26e7dd2f8d304ee589
>>>>>>> 35dea368ad310e70553b902f5279589ed2c2137c
import RegisUser from "./components/layouts/registers/RegisUser";
import RegisHoster from "./components/layouts/registers/RegisHoster";
import Footer from "./components/layouts/Footer";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
<<<<<<< HEAD
        <Route exact path="/destination" component={DestinationDetailAtas} />
=======
<<<<<<< HEAD
        <Route exact path="/destination" component={DestinationPages} />
=======
        <Route exact path="/destination" component={DestinationDetailAtas} />
>>>>>>> 4f25697edb46b8d022bafd26e7dd2f8d304ee589
>>>>>>> 35dea368ad310e70553b902f5279589ed2c2137c
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
