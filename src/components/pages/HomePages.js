import React from "react";
import styles from '../styles/Homepage.module.css'

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Search from "../layouts/Search";
import Category from "../layouts/Category";
import BannerB from "../layouts/BannerB";
import CreateMyTrip from "../layouts/CreateMyTrip";
import HosterNav from "../layouts/HosterNav";


const HomePage = () => (
  <div>
    <div className={styles.profileHoster}>
      <HosterNav/>
      <CreateMyTrip/>
    </div>
  </div>
);

export default HomePage;
