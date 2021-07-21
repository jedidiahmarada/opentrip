import React, { useState, useEffect } from "react";
import "../../styles/TabGaleri.css";

import { getTripIdAsync } from "../../redux/actions/tripActions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Galeri = () => {
  const { id } = useParams();
  //untuk fetching dan maping API
  const { getTripId } = useSelector((state) => state.tripReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTripIdAsync(id)); //async byid
  }, [dispatch]);
  return (
    <div>
      <hr className="garis2" />

      <div className="photoimage">
        <img
          classname="photogaleri1"
          src={getTripId.pict_1}
          alt="photogaleri"
        />
        <img
          classname="photogaleri2"
          src={getTripId.pict_2}
          alt="photogaleri"
        />
        <img
          classname="photogaleri3"
          src={getTripId.pict_3}
          alt="photogaleri"
        />
        <img
          classname="photogaleri4"
          src={getTripId.pict_4}
          alt="photogaleri"
        />
      </div>
    </div>
  );
};

export default Galeri;
