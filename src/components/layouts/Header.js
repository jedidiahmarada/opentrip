import React from "react";
import Login from "./Login";
import RegisPage from "./RegisPage";
import styles from "../styles/header.module.css";
import logo from "../assets/picture/logo.png";

const Header = () => (
  <div className={styles.header}>
    <div className={styles.header__nav}>
      <div className={styles.header__nav__container}>
        <h4>Beranda</h4> {/*it is will be routing to HomePage */}
        <h4>Destinasi</h4> {/*it is will be routing to Destination */}
      </div>
    </div>
    <div className={styles.header__brand}>
      <div className={styles.header__brand__container}>
        <img src={logo} alt="logo" width="220px" height="50px" />
      </div>
    </div>
    <div className={styles.header__user}>
      <div className={styles.header__user__container}>
        <div>
          <button className={styles.header__login__btn}>Login</button>
        </div>
        <div>
          <button className={styles.header__signup__btn}>Sign Up</button>
        </div>
      </div>
    </div>
  </div>
);
export default Header;
