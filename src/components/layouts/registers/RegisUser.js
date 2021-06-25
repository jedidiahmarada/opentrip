import React from "react";
import styles from "../../styles/regisUser.module.css";

const RegisUser = () => (
  <div>
    <div className={styles.regisUser__background}>
      <div className={styles.regisUser__card}>
        <div>
          <button className={styles.regisUser__btn}>Register</button>
        </div>
      </div>
    </div>
  </div>
);

export default RegisUser;
