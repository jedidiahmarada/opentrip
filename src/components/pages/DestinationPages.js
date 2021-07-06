import React from "react";
import Filter from "../layouts/destination/DestinationFilter";
import DestinationCard from "../layouts/destination/DestinationCard";
import styles from "../styles/DestinationPages.module.css";

const DestinationPages = () => {
  return (
    <div>
      <h4 className="semuatur">Semua Tur</h4>
      <h3 className="urutkan">Urutkan</h3>

      <select className="pilihurutan">
        <option>Pilih Urutan</option>
      </select>
      <div className={styles.tampunganNya}>
        <Filter />
        <DestinationCard />
      </div>
    </div>
  );
};

export default DestinationPages;
