import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DestinationItem from "./DestinationItem";
import styles from "../../styles/destinationCard.module.css";

import { getTripAsync } from "../../redux/actions/tripActions";

const DestinationCard = (props) => {
  //untuk fetching dan maping API
  const { getTrip } = useSelector((state) => state.tripReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTripAsync());
  }, [dispatch]);

  return (
    <div className={styles.div__card}>
      {getTrip &&
        getTrip.map((destination) => {
          console.log(destination);
          return (
            <DestinationItem key={destination.id} destination={destination} />
          );
        })}
    </div>
  );
};
export default DestinationCard;
