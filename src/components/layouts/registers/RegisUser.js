import React from "react";
import styles from "../../styles/regisUser.module.css";
import Header from "../Header";
import Footer from "../Footer";

const RegisUser = () => {
  return (
    <div>
      <Header />
      <div className={styles.regisUser__background}>
        <div className={styles.regisUser__card}>
          <div className={styles.regisUser__input}>
            <p className={styles.regisUser__title}>Register</p>
            <p className={styles.unameTitle}>User Name</p>
            <input className={styles.regisUser__inputUsername}></input>
            <p className={styles.emailTitle}>Email</p>
            <input className={styles.regisUser__inputEmail}></input>
            <p className={styles.pwTitle}>Password</p>
            <input
              className={styles.regisUser__inputPassword}
              type="password"
            ></input>

            <button className={styles.regisUser__btn}>Register</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisUser;
