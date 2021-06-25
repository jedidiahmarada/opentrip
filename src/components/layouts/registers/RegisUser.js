import React from "react";
import styles from "../../styles/regisUser.module.css";

const RegisUser = () => (
  <div>
    <div className={styles.regisUser__background}>
      <div className={styles.regisUser__card}>
        <div className={styles.regisUser__input}>
          <p>Register</p>
          <input
            className={styles.regisUser__inputUsername}
            placeholder="User Name"
          ></input>
          <input
            className={styles.regisUser__inputPassword}
            placeholder="Password"
          ></input>
          <input
            className={styles.regisUser__inputEmail}
            placeholder="Email"
          ></input>
          <button className={styles.regisUser__btn}>Register</button>
        </div>
      </div>
    </div>
  </div>
);

export default RegisUser;
