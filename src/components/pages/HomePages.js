import React from "react";
import Header from "../layouts/Header";
import BannerA from "../layouts/BannerA";
import Search from "../layouts/Search";
import Category from "../layouts/Category";
import Footer from "../layouts/Footer";
import BannerB from "../layouts/BannerB";

const HomePage = () => (
  <div>
    <Header />
    <BannerA />
    <Search />
    <Category />
    <BannerB />
    <Footer />
  </div>
);
export default HomePage;
