import React from "react";
import DestinationItem from "./DestinationItem";
import DestinationCarousel from "./DestinationCarousel";
import { responsive } from "../../responsive";

const NaikGunungList = ({ naikGunung }) => (
  <div>
    <h2>
      <b>Naik-Naik ke puncak Gunung</b>
    </h2>
    <DestinationCarousel responsiveConfig={responsive}>
      {naikGunung &&
        naikGunung.map((destination) => {
          return (
            <DestinationItem key={destination.id} destination={destination} />
          );
        })}
    </DestinationCarousel>
  </div>
);

export default NaikGunungList;
