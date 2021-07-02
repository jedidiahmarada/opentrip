import React, { useState } from "react";
import styles from "../../styles/DestinationDetailAtas.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import Dperjalanan from "./DPerjalanan";
import Galeri from "./Galeri";
import Sdk from "./Sdk";

import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
  BrowserRouter,
  useParams,
} from "react-router-dom";

const DestinationDetailAtas = () => {
  const [active, setActive] = useState({
    dperjalanan: true,
    sdk: false,
    galeri: false,
  });

  const handleDperjalanan = () => {
    setActive({ dperjalanan: true, sdk: false, galeri: false });
  };

  const handleSdk = () => {
    setActive({ dperjalanan: false, sdk: true, galeri: false });
  };

  const handleGaleri = () => {
    setActive({ dperjalanan: false, sdk: false, galeri: true });
  };

  const showDperjalanan = active.dperjalanan ? <Dperjalanan /> : null;
  const showSdk = active.sdk ? <Sdk /> : null;
  const showGaleri = active.galeri ? <Galeri /> : null;

  // const history = useHistory();

  return (
    <div>
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

      <div className="nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <a
              // href="#"
              className={`msg-${active.deperjalnan ? "active" : null}`}
              onClick={handleDperjalanan}
            >
              Detail Perjalanan
            </a>
          </li>
          <li className="nav-li">
            <a
              // href=""
              className={`msg-${active.sdk ? "active" : null}`}
              onClick={handleSdk}
            >
              Syarat & Ketentuan
            </a>
          </li>
          <li className="nav-li">
            <a
              // href=""
              className={`msg-${active.galeri ? "active" : null}`}
              onClick={handleGaleri}
            >
              Galeri
            </a>
          </li>
        </ul>
      </div>
      <div>
        {showDperjalanan}
        {showSdk}
        {showGaleri}
      </div>
    </div>
  );
};

export default DestinationDetailAtas;
