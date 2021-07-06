import React from "react";
import filtericon from "../../assets/picture/filtericon.png";
import "../../styles/Destination.css";
import searchicon from "../../assets/picture/searchicon.png";
import calendericon from "../../assets/picture/calendericon.png";
import photogaleri from "../../assets/picture/photogaleri.png";
import "bootstrap/dist/css/bootstrap.min.css";

const DestinationFilter = () => (
  <div class="destinationbackground">
    <div>
      <img className="filtericon" src={filtericon} alt="filtericon" />
      <p className="filterp">Filter</p>
    </div>
    <div className="filtercoloum">
      <hr className="hr1"></hr>
      <div className="rectangledestination"></div>

      <div id="list1" class="dropdown-check-list" tabindex="100">
        <span class="anchor">Tipe Perjalanan</span>
        <ul class="items">
          <li>
            <input type="checkbox" />
            Open Trip{" "}
          </li>
          <li>
            <input type="checkbox" />
            Private Trip{" "}
          </li>
        </ul>
      </div>

      <div
        id="list1"
        class="dropdown-check-list"
        tabindex="100"
        className="temaperjalanan"
      >
        <span class="anchor">Tema Perjalanan</span>
        <ul class="items">
          <li>
            <input type="checkbox" />
            Destinasi Populer{" "}
          </li>
          <li>
            <input type="checkbox" />
            Vitamin Sea{" "}
          </li>
          <li>
            <input type="checkbox" />
            Naik - Naik ke Puncak Gunung{" "}
          </li>
          <li>
            <input type="checkbox" />
            Menyatu Dengan Alam{" "}
          </li>
        </ul>
      </div>

      <div
        id="list1"
        class="dropdown-check-list"
        tabindex="100"
        className="budgetperjalanan"
      >
        <span class="anchor">Budget Perjalanan</span>
        <label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Rp
              </span>
            </div>

            <input
              type="text"
              className="form-control"
              placeholder="Budget Minimum"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </label>

        <label>
          <div className="input-group mb-3">
            <div className="input-group-prepend2">
              <span className="input-group-text" id="basic-addon1">
                Rp
              </span>
            </div>

            <input
              type="text"
              className="form-control"
              placeholder="Budget Maksimum"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </label>
        <span class="anchor">Lokasi keberangkatan</span>
        <label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <img className="searchicon" src={searchicon} alt="searchicon" />
              </span>
            </div>

            <input
              type="text"
              className="form-control"
              placeholder="Cari Lokasi Keberangkatan"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </label>

        <span class="anchor">Destinasi</span>
        <label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <img className="searchicon" src={searchicon} alt="searchicon" />
              </span>
            </div>

            <input
              type="text"
              className="form-control"
              placeholder="Cari Destinasi"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </label>

        <span class="anchor">Periode Berangkat</span>
        <label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <img
                  className="calendericon"
                  src={calendericon}
                  alt="calendericon"
                />
              </span>
            </div>

            <input
              type="text"
              className="form-control"
              placeholder="Pilih Tanggal Keberangkatan"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </label>

        <span class="anchor">Durasi</span>
        <form>
          <div className="form-group1">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Hari"
            />
          </div>

          <div className="form-group2">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Hari"
            />
          </div>

          <input type="range" className="durasirange" min="0" max="5" />
        </form>
      </div>
    </div>
  </div>
);

export default DestinationFilter;
