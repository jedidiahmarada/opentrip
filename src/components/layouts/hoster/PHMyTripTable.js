import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderAsync } from "../../redux/actions/orderAction";

import logo1 from "../../assets/picture/logo.png";
import notificon from "../../assets/picture/notificon.png";
import photoprofile from "../../assets/picture/photoprofile.png";
import photogaleri1 from "../../assets/picture/photogaleri.png";
import sorticon1 from "../../assets/picture/sorticon1.png";
import filtericon1 from "../../assets/picture/filtericon1.png";
import styles from "../../styles/PHMyTripTable.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HosterNav from "./HosterNav";

function PHMyTripTable() {
  //untuk fetching dan maping API
  const { getOrder } = useSelector((state) => state.orderReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderAsync());
  }, [dispatch]);
  //========================================

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

          {getOrder &&
            getOrder.map((order) => {
              return (
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
                  <p className={styles.besarquota}>`{order.qty}/10`</p>
                  <p className={styles.tanggal}>May 26,2019</p>
                  <p className={styles.p2}>06.30PM</p>
                  <p className={styles.biaya}>{order.total_price}</p>
                  <button className={styles.button1}>
                    {order.payment_status}
                  </button>
                  <button className={styles.button2}> Edit</button>
                  <button className={styles.button3}> Delete</button>
                  <a className={styles.namamember1} href="">
                    Nama Member
                  </a>
                </div>
              );
            })}
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
      </div>
    </div>
  );
}

export default PHMyTripTable;
