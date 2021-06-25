import React from "react";
import styles from "../styles/regispage.module.css";

const RegisPage = () => (
  <div className={styles.regispage}>
    <div className={styles.regispage__background}>
      <div className={styles.search__card}>
        <div></div>
        <div>
          <button>Search</button>
        </div>
      </div>
    </div>
  </div>
);

export default RegisPage;
