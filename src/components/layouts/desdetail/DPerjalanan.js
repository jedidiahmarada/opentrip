import React from "react";
import styles from "../../styles/DPerjalanan.module.css";

const DPerjalanan = () => {
  return (
    <div>
      <hr className="garis2" />
      <div className={styles.detilPerjalanan}>
        <div className={styles.rencanaWaktu}>
          <p className={styles.waktuHari}>Hari</p>
          <p className={styles.waktuAngka}>1</p>
        </div>
        <p className={styles.pukul}>20.01</p>
        <p className={styles.ketPerjalanan}>Berkumpul di meeting point</p>
      </div>
    </div>
  );
};

export default DPerjalanan;
