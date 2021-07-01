import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/desCard.module.css";
let imgURL = "https://image.tmdb.org/t/p/w500";

const DestinationItem = ({ destination }) => {
  return (
    <div className={styles.card__category}>
      {/* <Link to={`/category/${destination.id}`}> */}
      <img
        // src={`${imgURL}${destination.poster_path}`}
        src="https://th.bing.com/th/id/R199a3b217f47c915ddbb59dabdc8149c?rik=oNrgRbhOOK3Smw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-bUTz-VYcgYs%2fUQZ4VFhxyVI%2fAAAAAAAAAO4%2fVYFd7bKcZlQ%2fs1600%2fGambar%2bgambar%2bpemandangan%2bindah%2b5.jpg&ehk=f0hH2wCR%2bOtFjO2Fnw8BZ0kJGsxlXZix3tcilBzZNKs%3d&risl=&pid=ImgRaw"
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
