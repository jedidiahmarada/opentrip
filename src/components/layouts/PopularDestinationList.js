import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import destinationsActions from "../redux/actions/destinationsActions";
import DestinationItem from "./DestinationItem";

import DestinationSlider from "./DestinationSlider";
import { responsive } from "../../responsive";
import styles from "../styles/popular.module.css";

const PopularDestinationList = () => {
  const popularDestinations = useSelector(
    (state) => state.destinationsReducer.popularDestinations
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(destinationsActions.getPopularDestinations());
  }, [dispatch]);

  return (
    <div className={styles.popular__comp}>
      <h2 className={styles.slide__title}>Destinasi Populer</h2>
      <DestinationSlider responsiveConfig={responsive}>
        {popularDestinations &&
          popularDestinations.map((destination) => {
            return (
              <DestinationItem key={destination.id} destination={destination} />
            );
          })}
      </DestinationSlider>
    </div>
  );
};

export default PopularDestinationList;
