import React from "react";
// import aos from "aos";
// import "aos/dist/aos.css";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Search from "../layouts/Search";
import Category from "../layouts/Category";
import BannerB from "../layouts/BannerB";

const HomePage = () => (
  <div>
    <Header />
    <Search />
    <Category />
    <BannerB />
    <Footer />
  </div>
);

export default HomePage;
