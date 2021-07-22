import React, { useState } from "react";
import logo1 from "../../assets/picture/logo.png";
import notificon from "../../assets/picture/notificon.png";
import photoprofile from "../../assets/picture/photoprofile.png";
import photogaleri1 from "../../assets/picture/photogaleri.png";
import photogaleri2 from "../../assets/picture/photogaleri.png";
import photogaleri3 from "../../assets/picture/photogaleri.png";
import photogaleri4 from "../../assets/picture/photogaleri.png";
import sorticon1 from "../../assets/picture/sorticon1.png";
import filtericon1 from "../../assets/picture/filtericon1.png";
import styles from "../../styles/PHMyTripTable.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HosterNav from "./HosterNav";

function PHMyTripTable() {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([1, 2, 3, 4, 5]);
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
        <p className={styles.mytrip}>My Trip</p>
        <button className={styles.button}>New Trip + </button>
        <img className={styles.sorticon1} src={sorticon1} alt="sorticon1" />
        <p className={styles.sort1}>Sort</p>
        <img
          className={styles.filtericon1}
          src={filtericon1}
          alt="filtericon1"
        />
        <p className={styles.filter1}>Filter</p>

        <div className={styles.table}>
          <div className={styles.tablerow1}>
            <div className={styles.tripdetail} scope="col">
              Trip Details
            </div>
            <div className={styles.quota} scope="col">
              Quota
            </div>
            <div className={styles.datetrip} scope="col">
              Date Trip
            </div>
            <div className={styles.price} scope="col">
              Price
            </div>
            <div className={styles.status} scope="col">
              Status
            </div>
            <div className={styles.action} scope="col">
              Action
            </div>
            <div className={styles.namelist} scope="col">
              Name list
            </div>
            <hr className={styles.garisrow1} />
          </div>
          {rows.map((item, i) => (
            <div className={styles.tablerow2}>
              <img
                src={photogaleri1}
                className={styles.photogaleri1}
                alt="photogaleri1 "
                width="50"
                height="50"
              ></img>
              <p className={styles.bromotrip}>Bromo Trip</p>
              <br />
              <p className={styles.p1}>updated 1day ago</p>
              <p className={styles.besarquota}>5/10</p>
              <p className={styles.tanggal}>May 26,2019</p>
              <p className={styles.p2}>06.30PM</p>
              <p className={styles.biaya}>Rp 1.200.000</p>
              <button className={styles.button1}> AVAILABLE</button>
              <button className={styles.button2}> Edit</button>
              <button className={styles.button3}> Delete</button>
              <a className={styles.namamember1} href="">
                Nama Member
              </a>
              {/* <hr className={styles.garis1} /> */}
            </div>
          ))}
        </div>
        <div style={{ paddingLeft: "30%", width: "70%" }}>
          <p className={styles.p9}>Rows per page</p>
          <select className={styles.selectpicker}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
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
                  <span className="page-link" onClick={() => setPage(page + 1)}>
                    Next
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* <div className={styles.table}>
          <div className={styles.tablerow1}>
            <div className={styles.tripdetail} scope='col'>
              Trip Details
            </div>
            <div className={styles.quota} scope='col'>
              Quota
            </div>
            <div className={styles.datetrip} scope='col'>
              Date Trip
            </div>
            <div className={styles.price} scope='col'>
              Price
            </div>
            <div className={styles.status} scope='col'>
              Status
            </div>
            <div className={styles.action} scope='col'>
              Action
            </div>
            <div className={styles.namelist} scope='col'>
              Name list
            </div>
            <hr className={styles.garisrow1} />

            <div className={styles.tablerow2}>
              <img
                src={photogaleri1}
                className={styles.photogaleri1}
                alt='photogaleri1 '
                width='50'
                height='50'
              ></img>
              <p className={styles.bromotrip}>Bromo Trip</p>
              <br />
              <p className={styles.p1}>updated 1day ago</p>
              <p className={styles.besarquota}>5/10</p>
              <p className={styles.tanggal}>May 26,2019</p>
              <p className={styles.p2}>06.30PM</p>
              <p className={styles.biaya}>Rp 1.200.000</p>
              <button className={styles.button1}> AVAILABLE</button>
              <button className={styles.button2}> Edit</button>
              <button className={styles.button3}> Delete</button>
              <a className={styles.namamember1} href=''>
                Nama Member
              </a>
              <hr className={styles.garis1} />

              <div className={styles.tablerow3}>
                <img
                  src={photogaleri2}
                  className={styles.photogaleri2}
                  alt='photogaleri2 '
                  width='50'
                  height='50'
                ></img>
                <p className={styles.semerutrip}>Semeru Trip</p>
                <br />
                <p className={styles.p3}>updated 1day ago</p>
                <p className={styles.besarquota2}>10/10</p>
                <p className={styles.tanggal2}>May 26,2019</p>
                <p className={styles.p4}>08.00AM</p>
                <p className={styles.biaya2}>Rp 3.000.000</p>
                <button className={styles.button4}> FULL</button>
                <button className={styles.button5}> Edit</button>
                <button className={styles.button6}> Delete</button>
                <a className={styles.namamember2} href=''>
                  Nama Member
                </a>
                <hr className={styles.garis2} />

                <div className={styles.tablerow4}>
                  <img
                    src={photogaleri3}
                    className={styles.photogaleri3}
                    alt='photogaleri3 '
                    width='50'
                    height='50'
                  ></img>
                  <p className={styles.gunungsumbing}>Gunung Sumbing</p>
                  <br />
                  <p className={styles.p5}>updated 1day ago</p>
                  <p className={styles.besarquota3}>3/10</p>
                  <p className={styles.tanggal3}>May 26,2019</p>
                  <p className={styles.p6}>07.30PM</p>
                  <p className={styles.biaya3}>Rp 2.500.000</p>
                  <button className={styles.button7}> AVAILABLE</button>
                  <button className={styles.button8}> Edit</button>
                  <button className={styles.button9}> Delete</button>
                  <a className={styles.namamember3} href=''>
                    Nama Member
                  </a>
                  <hr className={styles.garis3} />

                  <div className={styles.tablerow5}></div>
                  <img
                    src={photogaleri4}
                    className={styles.photogaleri4}
                    alt='photogaleri4'
                    width='50'
                    height='50'
                  ></img>
                  <p className={styles.bukitpergasingan}>Bukit Pergasingan</p>
                  <br />
                  <p className={styles.p7}>updated 2day ago</p>
                  <p className={styles.besarquota4}>5/10</p>
                  <p className={styles.tanggal4}>May 25,2019</p>
                  <p className={styles.p8}>04.00PM</p>
                  <p className={styles.biaya4}>Rp 5.000.000</p>
                  <button className={styles.button10}> AVAILABLE</button>
                  <button className={styles.button11}> Edit</button>
                  <button className={styles.button12}> Delete</button>
                  <a className={styles.namamember4} href=''>
                    Nama Member
                  </a>
                  <hr className={styles.garis4} />

                  <p className={styles.p9}>Rows per page</p>
                  <select className={styles.selectpicker}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>

                  <div className={styles.pagination1}>
                    <nav aria-label='Page navigation example'>
                      <ul className='pagination'>
                        <li className='page-item'>
                          <span
                            className='page-link'
                            onClick={() => setPage(page - 1 > 0 ? page - 1 : 1)}
                          >
                            Previous
                          </span>
                        </li>
                        <li className='page-item'>
                          <span
                            className='page-link'
                            onClick={() => setPage(1)}
                          >
                            1
                          </span>
                        </li>
                        <li className='page-item'>
                          <span
                            className='page-link'
                            onClick={() => setPage(2)}
                          >
                            2
                          </span>
                        </li>
                        <li className='page-item'>
                          <span
                            className='page-link'
                            onClick={() => setPage(3)}
                          >
                            3
                          </span>
                        </li>
                        <li className='page-item'>
                          <span
                            className='page-link'
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
        </div> */}
      </div>
    </div>
  );
}

export default PHMyTripTable;
