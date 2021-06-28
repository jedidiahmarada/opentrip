import React from "react";
import filtericon from "../assets/picture/filtericon.png";
import filtericonbar from "../assets/picture/filtericonbar.png";
import filtericonbar1 from "../assets/picture/filtericonbar.png";
import filtericonbar2 from "../assets/picture/filtericonbar.png";
import "../styles/Destination.css";

const Destination = () => (
  <div class="destinationbackground">
    <div>
      <h4 className="semuatur">Semua Tur</h4>
      <h3 className="urutkan">Urutkan</h3>
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
  </div>
);

export default Destination;
