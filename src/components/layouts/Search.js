import React from "react";
import styles from "../styles/search.module.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const Search = () => (
  <div className={styles.search}>
    <div>
      <div className={styles.search__background}></div>
      <div className={styles.bannerA__text}>
        <h1>NEVER STOP</h1>
        <h1>EXPLORING THE WORLD</h1>
      </div>
      <div className={styles.search__card}>
        <div className={styles.search__destination}>
          <p className={styles.inputTitle}>Tempat</p>
          <input
            className={styles.search__input}
            type="text"
            placeholder="Semua Tempat"
          ></input>
        </div>
        <div>
          <p className={styles.dateTitle}>Tanggal</p>
          <DatePickerComponent></DatePickerComponent>
        </div>
        <div>
          <button className={styles.search__btn}>Cari</button>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
