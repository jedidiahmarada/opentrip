import React from "react";
import styles from '../styles/Homepage.module.css'

import Search from "../layouts/Search";
import Category from "../layouts/Category";

import BannerB from "../layouts/BannerB";
import CreateMyTrip from "../layouts/CreateMyTrip";
import HosterNav from "../layouts/HosterNav";


const HomePage = () => (
  <div>
    {/*<Search />*/}
    {/*<Category />*/}
    {/*<BannerB />*/}
    <div className={styles.profileHoster}>
      <HosterNav/>
      <CreateMyTrip/>
    </div>
  </div>
);

export default HomePage;
