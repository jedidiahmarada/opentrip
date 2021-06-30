import React from "react";
import Filter from "../layouts/DestinationFilter";
import DestinationCard from "../layouts/DestinationCard";
import styles from "../styles/DestinationPages.module.css";

const DestinationPages = () => {
  return (
    <div>
      <h4 className="semuatur">Semua Tur</h4>
      <h3 className="urutkan">Urutkan</h3>

      <div className="pilihurutan">
        <div class="pilihurutan form-group col-md-4">
          <select id="inputState" className="form-control">
            <option selected>Pilih Urutan</option>
          </select>
        </div>
      </div>
      <div className={styles.tampunganNya}>
        {/* <Filter /> */}
        <DestinationCard />
      </div>
    </div>
  );
};

export default DestinationPages;
