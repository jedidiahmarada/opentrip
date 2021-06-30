import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/desCard.module.css";
let imgURL = "https://image.tmdb.org/t/p/w500";

const DestinationItem = ({ destination }) => {
  return (
    <div className={styles.card__category}>
      {/* <Link to={`/category/${destination.id}`}> */}
      <img
        src={`${imgURL}${destination.poster_path}`}
        alt={destination.title}
      />
      {/* </Link> */}
      <h2 className={styles.title__card}>Title</h2>
      <p className={styles.subtitle__card}>Sub title</p>
      <p className={styles.harga}>Harga/</p>
      <button className={styles.card__btn}>Pesan Sekarang</button>
    </div>
  );
};

export default DestinationItem;
