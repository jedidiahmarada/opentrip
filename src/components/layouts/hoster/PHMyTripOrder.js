import React, { useState } from "react";
import logo1 from "../../assets/picture/logo.png";
import notificon from "../../assets/picture/notificon.png";
import photoprofile from "../../assets/picture/photoprofile.png";
import photogaleri5 from "../../assets/picture/photogaleri.png";
import photogaleri6 from "../../assets/picture/photogaleri.png";
import photogaleri7 from "../../assets/picture/photogaleri.png";
import photogaleri8 from "../../assets/picture/photogaleri.png";
import sorticon1 from "../../assets/picture/sorticon1.png";
import filtericon1 from "../../assets/picture/filtericon1.png";
import styles from "../../styles/PHMyTripOrder.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HosterNav from "./HosterNav";

function PHMyTripOrder() {
  const [page, setPage] = useState(1);
  return (
    <div className={styles.tableboxbackgorund}>
      <nav className="navbar navbar-light bg-light">
        <img className={styles.logo1} src={logo1} alt="logo1" />
        <img className={styles.notificon} src={notificon} alt="notificon" />
        <hr className={styles.garisvertical} width="1" size="40" />
        <p className={styles.namajones} marginRight="300px">
          Jones Ferdinand
        </p>
        <img
          src={photoprofile}
          className={styles.rounded_circle}
          alt="photoprofile "
          width="42"
          height="42"
        ></img>
      </nav>
      <HosterNav />
      <div className={styles.tableboxpage}>
        <p className={styles.order}>Order</p>

        <img className={styles.sorticon1} src={sorticon1} alt="sorticon1" />
        <p className={styles.sort1}>Sort</p>
        <img
          className={styles.filtericon1}
          src={filtericon1}
          alt="filtericon1"
        />
        <p className={styles.filter1}>Filter</p>

        <label className="dropdown">
          <select className={styles.action}>
            <option>Action</option>
            <option>Bulk Action</option>
            <option>Set to Completed</option>
            <option>Set to Cancel</option>
          </select>
        </label>

        <button className={styles.button13}> Apply</button>

        <div className={styles.searchbutton}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Search
            </span>

            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
            ></input>
          </div>

          <div className={styles.table}>
            <div className={styles.tablerow2}>
              <div className={styles.ordercode} scope="col">
                Order Code
              </div>
              <div className={styles.tripdetail2} scope="col">
                Trip
              </div>

              <div className={styles.orderdate} scope="col">
                Order Date
              </div>
              <div className={styles.status} scope="col">
                Status
              </div>
              <div className={styles.price} scope="col">
                Price
              </div>
              <hr className={styles.garisrow1a} />

              <div className={styles.tablerow3}>
                <div className="form-check1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  ></input>
                  <label className="form-check-label" for="exampleCheck1">
                    #898 Ahmad Subekti
                  </label>
                </div>

                <img
                  src={photogaleri5}
                  className={styles.photogaleri5}
                  alt="photogaleri5"
                  width="45"
                  height="45"
                ></img>
                <p className={styles.bromotrip2}>Bromo Trip</p>
                <br />
                <p className={styles.tanggal5}>May 26,2019</p>
                <p className={styles.p9}>06.30PM</p>
                <p className={styles.biaya5}>Rp 1.200.000</p>
                <button className={styles.button14}> COMPLETED</button>
              </div>
              <hr className={styles.garis5} />

              <div className={styles.tablerow4}>
                <div className="form-check1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck"
                  ></input>
                  <label className="form-check-label" for="flexCheckChecked">
                    #234 Carrisa Melinda
                  </label>
                </div>
                <img
                  src={photogaleri6}
                  className={styles.photogaleri6}
                  alt="photogaleri6"
                  width="45"
                  height="45"
                ></img>
                <p className={styles.semeru2}>Semeru Open Trip</p>
                <br />
                <p className={styles.tanggal6}>May 26,2019</p>
                <p className={styles.p10}>08.00AM</p>
                <p className={styles.biaya6}>Rp 3.000.000</p>
                <button className={styles.button15}> CANCELED</button>
              </div>
              <hr className={styles.garis6} />

              <div className={styles.tablerow5}>
                <div className="form-check1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck"
                  ></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    #4354 Jane Doe
                  </label>
                </div>
                <img
                  src={photogaleri7}
                  className={styles.photogaleri7}
                  alt="photogaleri7"
                  width="45"
                  height="45"
                ></img>
                <p className={styles.gunungsumbing2}>Gunung Sumbing</p>
                <br />
                <p className={styles.tanggal7}>May 26,2019</p>
                <p className={styles.p11}>07.30PM</p>
                <p className={styles.biaya7}>Rp 2.500.000</p>
                <button className={styles.button16}> PENDING PAYMENT</button>
              </div>
              <hr className={styles.garis7} />

              <div className={styles.tablerow8}>
                <div className="form-check1">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck"
                  ></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    #54584 Kiki Mela
                  </label>
                </div>
                <img
                  src={photogaleri8}
                  className={styles.photogaleri8}
                  alt="photogaleri8"
                  width="45"
                  height="45"
                ></img>
                <p className={styles.bukitpergasingan2}>Bukit Pergasingan</p>
                <br />
                <p className={styles.tanggal8}>May 25,2019</p>
                <p className={styles.p12}>04.00PM</p>
                <p className={styles.biaya8}>Rp 5.000.000</p>
                <button className={styles.button17}> COMPLETED</button>
              </div>
              <hr className={styles.garis8} />

              <p className={styles.p13}>Rows per page</p>
              <select className={styles.selectpicker}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>

              <div className={styles.pagination1}>
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <span
                        className="page-link"
                        onClick={() => setPage(page - 1 > 0 ? page - 1 : 1)}
                      >
                        Previous
                      </span>
                    </li>
                    <li className="page-item">
                      <span className="page-link" onClick={() => setPage(1)}>
                        1
                      </span>
                    </li>
                    <li className="page-item">
                      <span className="page-link" onClick={() => setPage(2)}>
                        2
                      </span>
                    </li>
                    <li className="page-item">
                      <span className="page-link" onClick={() => setPage(3)}>
                        3
                      </span>
                    </li>
                    <li className="page-item">
                      <span
                        className="page-link"
                        onClick={() => setPage(page + 1)}
                      >
                        Next
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PHMyTripOrder;
