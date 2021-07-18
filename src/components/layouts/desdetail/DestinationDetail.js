import React, { useState } from "react";
import "../../styles/DestinationDetailAtas.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import Dperjalanan from "./DPerjalanan";
import Galeri from "./Galeri";
import Sdk from "./Sdk";
import Header from "../Header";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

import Counterer from "./Counterer";
import CounterContext from "./Counter";
import InterMap from "../InterMap";

const DestinationDetailAtas = () => {
  const history = useHistory();
  const [active, setActive] = useState({
    dperjalanan: true,
    sdk: false,
    galeri: false,
  });

  const checkout = () => {
    history.push("/checkout");
  };
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

  const [count, setCounter] = useState(0);

  const increment = () => {
    //seharusnya count ini berdasarkan API quota
    // count < quota
    if (count < 10) {
      setCounter(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCounter(count - 1);
    }
  };

  const quotaBar = (
    //jumlah max harusnya berdasarkan API quota
    <ProgressBar max={10} now={count} label={`${count} pax`} variant="danger" />
  );

  return (
    <>
      <Header />
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
            <div className="petaLokasi">
              <InterMap />
            </div>
            <h4 className="hargaBerdasar">Harga berdasarkan jumlah orang</h4>
            <div className="quotaBar">
              {quotaBar}
              <p className="ketBar">{count} dari 10 kuota sudah terisi</p>
            </div>
            {/*<div className={styles.kalender}></div>*/}
            <div className="increDecreWBtn">
              <div className="increDecre">
                <CounterContext.Provider
                  value={{ count, increment, decrement }}
                >
                  <Counterer />
                </CounterContext.Provider>
              </div>
              <button className={"desdet-btn"} onClick={checkout}>
                Pesan Sekarang
              </button>
            </div>
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
      <Footer />
    </>
  );
};

export default DestinationDetailAtas;
