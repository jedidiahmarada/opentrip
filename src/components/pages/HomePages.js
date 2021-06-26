import React from "react";
import { Route } from "react-router-dom";

import Header from "../layouts/Header";
import Search from "../layouts/Search";
import Category from "../layouts/Category";
import Footer from "../layouts/Footer";
import BannerB from "../layouts/BannerB";

const HomePage = () => (
  <div>
    <Search />
    <Category />
    <BannerB />
    <Footer />
  </div>
);
export default HomePage;
