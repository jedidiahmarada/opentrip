import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DestinationItem from "../destination/DestinationItem";

import DestinationSlider from "../destination/DestinationSlider";
import { responsive } from "../../../responsive";
import styles from "../../styles/popular.module.css";

import { getCategoryAsync } from "../../redux/actions/categoryActions";

const PopularDestinationList = () => {
  //untuk fetching dan maping API
  const { getCategory } = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAsync());
  }, [dispatch]);
  //============================

  return (
    <div className={styles.popular__comp}>
      <h2 className={styles.slide__title}>Destinasi Populer</h2>
      <DestinationSlider responsiveConfig={responsive}>
        {getCategory &&
          getCategory.map((destination) => {
            return (
              //props1 key props 2 destination
              <DestinationItem key={destination.id} destination={destination} />
            );
          })}
      </DestinationSlider>
    </div>
  );
};

export default PopularDestinationList;
