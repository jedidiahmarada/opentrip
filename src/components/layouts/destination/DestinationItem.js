import React from "react";
import styles from "../../styles/desCard.module.css";
import { useHistory } from "react-router-dom";

const DestinationItem = ({ destination }) => {
  //untuk mengambil token
  const tokenDes = localStorage.getItem("token");
  console.log(tokenDes, "ini loh tokennya woyyy ini liatt sini ya elah");

  const history = useHistory();
  console.log(destination, "------");

  const DesDetail = (id) => {
    if (tokenDes == null) {
      history.push("/login");
    } else {
      history.push(`/desdetail/${id}`);
    }
  };

  return (
    <div className={styles.card__container}>
      <div className={styles.card__category}>
        <div className={styles.card}>
          <img src={destination.thumbnail_pict} alt={destination.trip_name} />

          <h2 className={styles.title__card}>{destination.trip_name}</h2>
          <p className={styles.subtitle__card}>
            Minimum Keberangkatan 10 Orang, Syarat & Ketentuan Berlaku
          </p>
          <p className={styles.harga}>
            {destination.price}/<p className={styles.orang}>Orang</p>
          </p>

          <button
            className={styles.card__btn}
            onClick={() => DesDetail(destination.id)}
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationItem;
