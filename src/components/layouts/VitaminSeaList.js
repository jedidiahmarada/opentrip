import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import destinationsActions from "../redux/actions/destinationsActions";
import DestinationItem from "./DestinationItem";
import DestinationCarousel from "./DestinationCarousel";
import { responsive } from "../../responsive";

const VitaminSeaList = () => {
  const vitaminSea = useSelector(
    (state) => state.destinationsReducer.vitaminSea
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(destinationsActions.getVitaminSea());
  }, [dispatch]);

  return (
    <div>
      <h2>
        <b>Vitamin Sea</b>
      </h2>
      <DestinationCarousel responsiveConfig={responsive}>
        {vitaminSea &&
          vitaminSea.map((destination) => {
            return (
              <DestinationItem key={destination.id} destination={destination} />
            );
          })}
      </DestinationCarousel>
    </div>
  );
};

export default VitaminSeaList;
