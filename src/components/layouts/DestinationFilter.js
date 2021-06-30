import React from "react";
import filtericon from "../assets/picture/filtericon.png";
import filtericonbar from "../assets/picture/filtericonbar.png";
import filtericonbar1 from "../assets/picture/filtericonbar.png";
import filtericonbar2 from "../assets/picture/filtericonbar.png";
import filtericonbar3 from "../assets/picture/filtericonbar.png";
import searchicon1 from "../assets/picture/searchicon.png";
import filtericonbar4 from "../assets/picture/filtericonbar.png";
import searchicon2 from "../assets/picture/searchicon.png";
import filtericonbar5 from "../assets/picture/filtericonbar.png";
import calendericon from "../assets/picture/calendericon.png";
import filtericonbar6 from "../assets/picture/filtericonbar.png";
import "../styles/Destination.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const DestinationFilter = () => (
  <div class="destinationbackground">
    <div>
      <img className="filtericon" src={filtericon} alt="filtericon" />
      <p className="filterp">Filter</p>
    </div>
    <div class="filtercoloum">
      <hr className="hr1"></hr>
      <div className="rectangledestination"></div>
      <p className="tipeperjalanan">Tipe Perjalanan</p>
      <img className="filtericonbar" src={filtericonbar} alt="filtericonbar" />
      <hr className="hr2"></hr>
      <div class="formcheck1">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <label class="form-check-label" for="flexCheckChecked">
          Open Trip
        </label>
      </div>
      <div class="formcheck2">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <label class="form-check-label" for="flexCheckChecked">
          Private Trip
        </label>
      </div>
    </div>
    <p className="temaperjalanan">Tema Perjalanan</p>
    <img className="filtericonbar1" src={filtericonbar1} alt="filtericonbar1" />
    <hr className="hr3"></hr>
    <div class="formcheck3">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
      />
      <label class="form-check-label" for="flexCheckChecked">
        Destinasi Popular
      </label>
    </div>
    <div class="formcheck4">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
      />
      <label class="form-check-label" for="flexCheckChecked">
        Vitamin Sea
      </label>
    </div>
    <div class="formcheck5">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
      />
      <label class="form-check-label" for="flexCheckChecked">
        Naik - Naik ke Puncak Gunung
      </label>
    </div>
    <div class="formcheck6">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
      />
      <label class="form-check-label" for="flexCheckChecked">
        Menyatu Dengan Alam
      </label>
    </div>
    <p className="budgetperjalanan">Budget</p>
    <img className="filtericonbar2" src={filtericonbar2} alt="filtericonbar2" />
    <hr className="hr4"></hr>

    <div className="budgetminimum">
      <div class="input-group-prepend">
        <span class="input-group-text"> {"  Rp"} </span>
        <input
          type="text"
          className="budgetminimuminput"
          placeholder="Budget Minimum"
        />
      </div>

      <div className="budgetmaksimum">
        <div class="input-group-prepend">
          <span class="input-group-text"> {"  Rp"} </span>
          <input
            type="text"
            className="budgetmaksimuminput"
            placeholder="Budget Maksimum"
          />
        </div>

        <p className="lokasikeberangkatan">Lokasi Keberangkatan</p>
        <img
          className="filtericonbar3"
          src={filtericonbar3}
          alt="filtericonbar3"
        />
        <hr className="hr5"></hr>
      </div>

      <div className="lokasiberangkat">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <img className="searchicon1" src={searchicon1} alt="searchicon1" />
          </span>
          <input
            type="text"
            className="lokasiberangkatinput"
            placeholder="Cari Lokasi Keberangkatan"
          />
        </div>
      </div>

      <p className="destinasi">Destinasi</p>
      <img
        className="filtericonbar4"
        src={filtericonbar4}
        alt="filtericonbar4"
      />
      <hr className="hr6"></hr>
    </div>

    <div className="caridestinasi">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <img className="searchicon2" src={searchicon2} alt="searchicon2" />
        </span>
        <input
          type="text"
          className="caridestinasiinput"
          placeholder="Cari Destinasi"
        />
      </div>
    </div>

    <p className="periodeberangkat">Periode Berangkat</p>
    <img className="filtericonbar5" src={filtericonbar5} alt="filtericonbar5" />
    <hr className="hr7"></hr>

    <div className="pilihtanggal">
      <div class="input-group-prepend">
        {/* <span class="input-group-text">
          <img className="calendericon" src={calendericon} alt="calendericon" />
        </span> */}
        {/* <input
          type="text"
          className="pilihtanggalinput"
          placeholder="Pilih Tanggal Keberangkatan"
        /> */}
        <DatePickerComponent></DatePickerComponent>
      </div>
    </div>
    <p className="durasi">Durasi</p>
    <img className="filtericonbar6" src={filtericonbar6} alt="filtericonbar6" />
    <hr className="hr8"></hr>

    <div className="durasibox1">
      <div class="input-group-prepend">
        <span class="input-group-text"></span>
        <p>{"1 Hari"}</p>
      </div>
    </div>

    <div className="durasibox2">
      <div class="input-group-prepend">
        <span class="input-group-text"></span>
        <p>{"10 Hari"}</p>
      </div>
    </div>
    <input type="range" className="durasirange" min="0" max="5" />
  </div>
);

export default DestinationFilter;
