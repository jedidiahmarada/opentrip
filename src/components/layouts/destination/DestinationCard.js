import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import destinationsActions from "../../redux/actions/destinationsActions";
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

  const destinations = useSelector(
    (state) => state.destinationsReducer.destinations
  );

  useEffect(() => {
    console.log(props, "coba");
    dispatch(destinationsActions.getAllDestination(props.page));
    console.log(destinations, "destinationCard");
  }, [dispatch, props.page]);

  return (
    <div className={styles.div__card}>
      {destinations &&
        destinations.map((destination) => {
          console.log(destination);
          return (
            <DestinationItem key={destination.id} destination={destination} />
          );
        })}
    </div>
  );
};
export default DestinationCard;
