import React from "react";

import Search from "../layouts/Search";
import Category from "../layouts/Category";
import BannerB from "../layouts/BannerB";
import OrderReceived from "../layouts/OrderReceived";
import OrderConfirm from "../layouts/OrderConfirm";

const HomePage = () => (
  <div>
    {/* <Search />
    <Category />
    <BannerB />
    <OrderReceived /> */}
    <OrderConfirm />
  </div>
);
export default HomePage;
