import React from "react";
import { Link } from "react-router-dom";
let imgURL = "https://image.tmdb.org/t/p/w500";

const DestinationItem = ({ destination }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to={`/milan-tv/${destination.id}`}>
        <img
          className="carousel-image"
          src={`${imgURL}${destination.poster_path}`}
          alt={destination.title}
        />
      </Link>
    </div>
  );
};

export default DestinationItem;
