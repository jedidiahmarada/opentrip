import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import destinationsActions from "../redux/actions/destinationsActions";
import DestinationItem from "./DestinationItem";
import DestinationSlider from "./DestinationSlider";
import { responsive } from "../../responsive";
import styles from "../styles/vitsea.module.css";

const VitaminSeaList = () => {
  const vitaminSea = useSelector(
    (state) => state.destinationsReducer.vitaminSea
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(destinationsActions.getVitaminSea());
  }, [dispatch]);

  return (
    <div className={styles.popular__comp}>
      <h2 className={styles.slide__title}>Vitamin Sea</h2>
      <DestinationSlider responsiveConfig={responsive}>
        {vitaminSea &&
          vitaminSea.map((destination) => {
            return (
              <DestinationItem key={destination.id} destination={destination} />
            );
          })}
      </DestinationSlider>
    </div>
  );
};

export default VitaminSeaList;
