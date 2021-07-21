import React, { useEffect, useState } from "react";
import {
  getCategoryAsync,
  getIdCategoryAsync,
  setCheckedCategory,
} from "../../redux/actions/categoryActions";
import { useDispatch, useSelector } from "react-redux";

import filtericon from "../../assets/picture/filtericon.png";
import styles from "../../styles/Destination.module.css";
import searchicon from "../../assets/picture/searchicon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Collapsible from "react-collapsible";

const DestinationFilter = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);
  const [collapsed4, setCollapsed4] = useState(true);
  const [collapsed5, setCollapsed5] = useState(true);
  const [collapsed6, setCollapsed6] = useState(true);
  const [collapsed7, setCollapsed7] = useState(true);

  const [Checked, setChecked] = useState([]);

  const handleToggle = (id) => {
    dispatch(setCheckedCategory(id));
  };

  const { getCategory } = useSelector((state) => state.categoryReducer);
  const { checkedCategory } = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAsync());
  }, [dispatch]);

  return (
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
                <button
                  className={`accordion-button ${collapsed ? "collapsed" : ""}`}
                  onClick={() => setCollapsed(!collapsed)}
                >
                  Tipe Perjalanan
                </button>
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
                  <button
                    className={`accordion-button ${
                      collapsed2 ? "collapsed" : ""
                    }`}
                    onClick={() => setCollapsed2(!collapsed2)}
                  >
                    Tema Perjalanan
                  </button>
                </h2>,
              ]}
            >
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                {getCategory &&
                  getCategory.map((id) => {
                    return (
                      <div className={styles.temaperjalanan.accordion_body}>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            checked={checkedCategory.includes(id.id)}
                            onChange={() => handleToggle(id.id)}
                          ></input>
                          <label
                            className="form-check-label"
                            for="exampleCheck1"
                          >
                            {id.category_name}
                          </label>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </Collapsible>
            <div className={styles.budgetperjalanan}>
              <Collapsible
                open
                trigger={[
                  "",
                  <h2 className={styles.budgetperjalanan.accordion_header}>
                    <button
                      className={`accordion-button ${
                        collapsed3 ? "collapsed" : ""
                      }`}
                      onClick={() => setCollapsed3(!collapsed3)}
                    >
                      Budget
                    </button>
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
                      <button
                        className={`accordion-button ${
                          collapsed4 ? "collapsed" : ""
                        }`}
                        onClick={() => setCollapsed4(!collapsed4)}
                      >
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
                      <h2
                        className={styles.destinasiperjalanan.accordion_header}
                      >
                        <button
                          className={`accordion-button ${
                            collapsed5 ? "collapsed" : ""
                          }`}
                          onClick={() => setCollapsed5(!collapsed5)}
                        >
                          Destinasi
                        </button>
                      </h2>,
                    ]}
                  >
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div
                        className={styles.destinasiperjalanan.accordion_body}
                      >
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
                        <h2
                          className={styles.periodeberangkat.accordion_header}
                        >
                          <button
                            className={`accordion-button ${
                              collapsed6 ? "collapsed" : ""
                            }`}
                            onClick={() => setCollapsed6(!collapsed6)}
                          >
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
                            <button
                              className={`accordion-button ${
                                collapsed7 ? "collapsed" : ""
                              }`}
                              onClick={() => setCollapsed7(!collapsed7)}
                            >
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
                          <div
                            className={styles.durasiperjalanan.accordion_body}
                          >
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
};

export default DestinationFilter;
