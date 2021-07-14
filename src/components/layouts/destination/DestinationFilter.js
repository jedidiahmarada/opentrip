import React from "react";
import filtericon from "../../assets/picture/filtericon.png";
import styles from "../../styles/Destination.module.css";
import searchicon from "../../assets/picture/searchicon.png";
import calendericon from "../../assets/picture/calendericon.png";
import photogaleri from "../../assets/picture/photogaleri.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Collapsible from "react-collapsible";

const DestinationFilter = () => (
  <div className={styles.destinationbackground}>
    <div className={styles.fiterContainer}>
      <img className={styles.filtericon} src={filtericon} alt="filtericon" />
      <p className={styles.filterp}>Filter</p>
    </div>
    <div className={styles.filtercoloum}>
      <div className={styles.tipeperjalanan}>
        <Collapsible
          open
          trigger={[
            "",
            <h2 className={styles.tipeperjalanan.accordion_header}>
              <button className="accordion-button">Tipe Perjalanan</button>
            </h2>,
          ]}
        >
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
        </Collapsible>

        <div className={styles.temaperjalanan}>
          <Collapsible
            open
            trigger={[
              "",
              <h2 className={styles.temaperjalanan.accordion_header}>
                <button className="accordion-button">Tema Perjalanan</button>
              </h2>,
            ]}
          >
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className={styles.temaperjalanan.accordion_body}>
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
          </Collapsible>
          <div className={styles.budgetperjalanan}>
            <Collapsible
              open
              trigger={[
                "",
                <h2 className={styles.budgetperjalanan.accordion_header}>
                  <button className="accordion-button">Budget</button>
                </h2>,
              ]}
            >
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className={styles.budgetperjalanan.accordion_body}>
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
            </Collapsible>
            <div className={styles.lokasikeberangkatan}>
              <Collapsible
                open
                trigger={[
                  "",
                  <h2 className={styles.lokasikeberangkatan.accordion_header}>
                    <button className="accordion-button">
                      Lokasi Keberangkatan
                    </button>
                  </h2>,
                ]}
              >
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className={styles.lokasikeberangkatan.accordion_body}>
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
              </Collapsible>
              <div className={styles.destinasiperjalanan}>
                <Collapsible
                  open
                  trigger={[
                    "",
                    <h2 className={styles.destinasiperjalanan.accordion_header}>
                      <button className="accordion-button">Destinasi</button>
                    </h2>,
                  ]}
                >
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className={styles.destinasiperjalanan.accordion_body}>
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
                </Collapsible>
                <div className={styles.periodeberangkat}>
                  <Collapsible
                    open
                    trigger={[
                      "",
                      <h2 className={styles.periodeberangkat.accordion_header}>
                        <button className="accordion-button">
                          Periode Berangkat
                        </button>
                      </h2>,
                    ]}
                  >
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className={styles.periodeberangkat.accordion_body}>
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
                  </Collapsible>

                  <div className={styles.durasiperjalanan}>
                    <Collapsible
                      open
                      trigger={[
                        "",
                        <h2
                          className={styles.durasiperjalanan.accordion_header}
                        >
                          <button className="accordion-button">
                            Durasi Perjalanan
                          </button>
                        </h2>,
                      ]}
                    >
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div className={styles.durasiperjalanan.accordion_body}>
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
                              max="10"
                              class="slider"
                              id="myRange"
                            ></input>
                          </div>
                        </div>
                      </div>
                    </Collapsible>
                  </div>
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
