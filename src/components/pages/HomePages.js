import React from "react";

import Search from "../layouts/Search";
import Category from "../layouts/Category";
import BannerB from "../layouts/BannerB";
// import OrderConfirm from "../layouts/OrderConfirm";

const HomePage = () => (
  <div>
    <Search />
    <Category />
    <BannerB />
    {/* <OrderConfirm /> */}
  </div>
);
export default HomePage;
