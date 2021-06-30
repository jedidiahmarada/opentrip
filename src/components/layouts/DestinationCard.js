import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import destinationsActions from "../redux/actions/destinationsActions";
import DestinationItem from "./DestinationItem";
import styles from "../styles/destinationCard.module.css";

const DestinationCard = () => {
  //   const destinations = useSelector(
  //     (state) => state.destinationsReducer.destinations
  //   );
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(destinationsActions.getDestinations());
  //   }, [dispatch]);

  const vitaminSea = useSelector(
    (state) => state.destinationsReducer.vitaminSea
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(destinationsActions.getVitaminSea());
  }, [dispatch]);

  return (
    <div className={styles.div__card}>
      {/* {destinations &&
        destinations.map((destination) => {
          return (
            <DestinationItem key={destination.id} destination={destination} />
          );
        })} */}
      {vitaminSea &&
        vitaminSea.map((destination) => {
          return (
            <DestinationItem key={destination.id} destination={destination} />
          );
        })}
    </div>
  );
};
export default DestinationCard;
