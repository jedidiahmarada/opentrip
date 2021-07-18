import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import destinationsActions from "../../redux/actions/destinationsActions";
import DestinationItem from "../destination/DestinationItem";

import DestinationSlider from "../destination/DestinationSlider";
import { responsive } from "../../../responsive";
import styles from "../../styles/popular.module.css";

const PopularDestinationList = () => {
  const popularDestinations = useSelector(
    (state) => state.destinationsReducer.popularDestinations
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(destinationsActions.getPopularDestinations());
  }, [dispatch]);
  console.log(popularDestinations, "bwakkkk");
  return (
    <div className={styles.popular__comp}>
      <h2 className={styles.slide__title}>Destinasi Populer</h2>
      <DestinationSlider responsiveConfig={responsive}>
        {popularDestinations &&
          popularDestinations.map((destination) => {
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
