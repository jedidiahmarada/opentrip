import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import destinationsActions from "../../redux/actions/destinationsActions";
import DestinationItem from "../destination/DestinationItem";
import DestinationSlider from "../destination/DestinationSlider";
import { responsive } from "../../../responsive";
import styles from "../../styles/vitsea.module.css";

const NaikGunungList = () => {
  const naikGunung = useSelector(
    (state) => state.destinationsReducer.naikGunung
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(destinationsActions.getNaikGunung());
  }, [dispatch]);

  return (
    <div className={styles.popular__comp}>
      <h2 className={styles.slide__title}>Naik Naik ke Puncak Gunug</h2>
      <DestinationSlider responsiveConfig={responsive}>
        {naikGunung &&
          naikGunung.map((destination) => {
            return (
              <DestinationItem key={destination.id} destination={destination} />
            );
          })}
      </DestinationSlider>
    </div>
  );
};

export default NaikGunungList;
