import React from "react";
import styles from "../../styles/DestinationDetailAtas.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
  BrowserRouter,
  useParams,
} from "react-router-dom";

import Dperjalanan from "./DPerjalanan";

const DestinationDetailAtas = () => {
  let { path, url } = useRouteMatch();
  let { topicId } = useParams();

  const history = useHistory();

  const dPerjalanan = () => {
    history.push("/dperjalanan");
  };

  const sdk = () => {
    history.push("/s&k");
  };

  const galeri = () => {
    history.push("/galeri");
  };
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

      <BrowserRouter>
        <div className="nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <a href={`${url}/dperjalanan`}>Detail Perjalanan</a>
            </li>
            <li className="nav-li">
              <a href="">Syarat & Ketentuan</a>
            </li>
            <li className="nav-li">
              <a href="#">Galeri</a>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route exact path={path} component={Dperjalanan} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default DestinationDetailAtas;
