import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/desCard.module.css";
let imgURL = "https://image.tmdb.org/t/p/w500";

const DestinationItem = ({ destination }) => {
  return (
    <div className={styles.card__category}>
      <Link to={`/category/${destination.id}`}>
        <img
          src={`${imgURL}${destination.poster_path}`}
          alt={destination.title}
        />
      </Link>
      <h2>Title</h2>
      <p>Sub title</p>
      <p>Harga</p>
      <button className={styles.card__btn}>coba</button>
    </div>
  );
};

export default DestinationItem;
