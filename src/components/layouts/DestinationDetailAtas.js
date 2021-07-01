<<<<<<< HEAD
import React from "react";
import styles from "../styles/DestinationDetailAtas.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const DestinationDetailAtas = () => {
  return (
    <div className="destinasiAtas">
      <div className="bgImgDDetails" />

      <div className="bagKanan">
        <div className="sblmDivider">
          <p className="routerDAtas">Destinasi / Jawa Timur</p>
          <hr className="solidDivider" />
        </div>
        <h1 className="namaDestinasi">Gunung Bromo</h1>
        <h5 className="ketNamaDestinasi">
          Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku
        </h5>
        <DatePickerComponent
          id="datepicker"
          cssClass="e-date-icon"
          cssClass="e-date-wrapper"
        />
        <div className="petaLokasi"></div>
        <h4 className="hargaBerdasar">Harga berdasarkan jumlah orang</h4>
        {/*<div className={styles.kalender}></div>*/}
=======
import React from 'react';
import styles from "../styles/DestinationDetailAtas.module.css";

const DestinationDetailAtas = () => {
  return (
    <div className={styles.destinasiAtas}>
      <div className={styles.bgImgDDetails}/>
      <div className={styles.bagKanan}>
        <div className={styles.sblmDivider}>
          <p className={styles.routerDAtas}>Destinasi / Jawa Timur</p>
          <hr className={styles.solidDivider}/>
        </div>
        <h1 className={styles.namaDestinasi}>Gunung Bromo</h1>
        <h5 className={styles.keteranganNamaDestinasi}>Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku</h5>
>>>>>>> 35dea368ad310e70553b902f5279589ed2c2137c
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default DestinationDetailAtas;
=======
export default DestinationDetailAtas;
>>>>>>> 35dea368ad310e70553b902f5279589ed2c2137c
