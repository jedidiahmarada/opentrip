import React from "react";
import filtericon from "../../assets/picture/filtericon.png";
import styles from "../../styles/Destination.module.css";
import searchicon from "../../assets/picture/searchicon.png";
import calendericon from "../../assets/picture/calendericon.png";
import photogaleri from "../../assets/picture/photogaleri.png";
import "bootstrap/dist/css/bootstrap.min.css";

const DestinationFilter = () => (
  <div className={styles.destinationbackground}>
    <div>
      <img className={styles.filtericon} src={filtericon} alt="filtericon" />
      <p className={styles.filterp}>Filter</p>
    </div>
    <div className={styles.filtercoloum}>
      <div className={styles.tipeperjalanan}>
        <div
          className={styles.tipeperjalanan.accordion}
          id="accordionPanelsStayOpenExample"
        >
          <div className={styles.tipeperjalanan.accordion_item}>
            <h2
              className={styles.tipeperjalanan.accordion_header}
              id="panelsStayOpen-headingOne"
            >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Tipe Perjalanan
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className={styles.tipeperjalanan.accordion_body}>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  ></input>
                  <label className="form-check-label" for="exampleCheck1">
                    Open Trip
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Private Trip
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.temaperjalanan}>
        <div className={styles.accordion} id="accordionPanelsStayOpenExample">
          <div className={styles.accordion_item}>
            <h2
              className={styles.accordion_header}
              id="panelsStayOpen-headingOne"
            >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Tema Perjalanan
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  ></input>
                  <label className="form-check-label" for="exampleCheck1">
                    Destinasi Popular
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Vitamin Sea
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  ></input>
                  <label className="form-check-label" for="exampleCheck1">
                    Naik - Naik ke Puncak Gunung
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Menyatu Dengan Alam
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.budgetperjalanan}>
        <div className={styles.accordion} id="accordionPanelsStayOpenExample">
          <div className={styles.accordion_item}>
            <h2
              className={styles.accordion_header}
              id="panelsStayOpen-headingOne"
            >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Budget
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Rp
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Budget Minimum"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Rp
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Budget Maksimum"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lokasikeberangkatan}>
        <div className={styles.accordion} id="accordionPanelsStayOpenExample">
          <div className={styles.accordion_item}>
            <h2
              className={styles.accordion_header}
              id="panelsStayOpen-headingOne"
            >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Lokasi Keberangkatan
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <img
                      className="searchicon"
                      src={searchicon}
                      alt="searchicon"
                    />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Lokasi Keberangkatan"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.destinasiperjalanan}>
        <div className={styles.accordion} id="accordionPanelsStayOpenExample">
          <div className={styles.accordion_item}>
            <h2
              className={styles.accordion_header}
              id="panelsStayOpen-headingOne"
            >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Destinasi
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <img
                      className="searchicon"
                      src={searchicon}
                      alt="searchicon"
                    />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Destinasi"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.periodeberangkat}>
        <div className={styles.accordion} id="accordionPanelsStayOpenExample">
          <div className={styles.accordion_item}>
            <h2
              className={styles.accordion_header}
              id="panelsStayOpen-headingOne"
            >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Periode Berangkat
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <div className="input-group mb-3">
                  {/* <span className="input-group-text" id="basic-addon1">
                    <img
                      className="calendericon"
                      src={calendericon}
                      alt="calendericon"
                    />
                  </span> */}

                  <input
                    type="date"
                    className="form-control"
                    placeholder="Pilih Tanggal Keberangkatan"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.durasiperjalanan}>
        <div className={styles.accordion} id="accordionPanelsStayOpenExample">
          <div className={styles.accordion_item}>
            <h2
              className={styles.accordion_header}
              id="panelsStayOpen-headingOne"
            >
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Durasi Perjalanan
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <div className={styles.boxdurasi}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hari"
                  ></input>
                </div>
                <div className={styles.boxdurasi}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hari"
                  ></input>
                </div>

                <div className={styles.durasirange}>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    class="slider"
                    id="myRange"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DestinationFilter;
