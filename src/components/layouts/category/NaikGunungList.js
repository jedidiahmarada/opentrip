import React from "react";
import { useSelector } from "react-redux";
import DestinationItem from "../destination/DestinationItem";

import DestinationSlider from "../destination/DestinationSlider";
import { responsive } from "../../../responsive";
import styles from "../../styles/vitsea.module.css";

const NaikGunungList = () => {
  //untuk fetching dan maping API
  const getCategory = useSelector((state) => {
    console.log(state.categoryReducer.getCategory[2], "category");
    return state.categoryReducer.getCategory[2].Trips;
  });

  //============================

  return (
    <div className={styles.popular__comp}>
      <h2 className={styles.slide__title}>Naik Naik ke Puncak Gunug</h2>
      <DestinationSlider responsiveConfig={responsive}>
        {getCategory &&
          getCategory.map((destination) => {
            return (
              <DestinationItem key={destination.id} destination={destination} />
            );
          })}
      </DestinationSlider>
    </div>
  );
};

export default NaikGunungList;
