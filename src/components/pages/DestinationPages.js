import React, { useState } from "react";
import Filter from "../layouts/destination/DestinationFilter";
import DestinationCard from "../layouts/destination/DestinationCard";
import styles from "../styles/DestinationPages.module.css";

const DestinationPages = () => {
  const [page, setPage] = useState(1);

  return (
    <div className={styles.destination0}>
      <div className={styles.destination1}>
        <h4 className={styles.semuatur}>Semua Tur</h4>
        <div className={styles.urutkan1}>
          <h3 className={styles.urutkan}>Urutkan</h3>
          <select className={styles.pilihurutan}>
            <option>Pilih Urutan</option>
          </select>
        </div>
      </div>
      <div className={styles.kotakgaris}>
        <hr className={styles.hr1}></hr>
        <div className={styles.rectangledestination}></div>
      </div>

      <div className={styles.destination2}>
        <div className={styles.filter1}>
          <Filter />
        </div>
        <div className={styles.destinationCard1}>
          <DestinationCard page={page} />
        </div>
      </div>

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
  );
};

export default DestinationPages;
