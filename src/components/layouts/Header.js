import React from "react";
import Login from "./Login";
import RegisPage from "./RegisPage";
import styles from "../styles/header.module.css";
const Header = () => (
  <div className={styles.header}>
    <div className={styles.header__brand}>
      <div className={styles.header__container}>
        <h4>Beranda</h4>
        <h4>Destinasi</h4>
        {/* <Login />
        <RegisPage /> */}
      </div>
    </div>
  </div>
);
export default Header;
