import React from "react";

import Search from "../layouts/Search";
import Category from "../layouts/Category";

import BannerB from "../layouts/BannerB";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import DestinationDetailAtas from "../layouts/DestinationDetailAtas";
import TabsDDetail from '../layouts/tabsDDetail'

const Destination = () => (
  <div>
    <Header />
    <DestinationDetailAtas />
    <TabsDDetail/>
    <Footer />
  </div>
);

export default Destination;
