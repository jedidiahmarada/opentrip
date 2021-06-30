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
      </div>
    </div>
  );
};

export default DestinationDetailAtas;
