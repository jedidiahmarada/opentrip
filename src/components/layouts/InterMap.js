import Map from "./Map";
import H from "@here/maps-api-for-javascript";
import { useState } from "react";

function App() {
  const [lat, useLat] = useState("");
  const [lng, useLng] = useState("");
  const [zoom, useZoom] = useState("");

  const handleMapViewChange = () => {};
  return (
    <div>
      <Map
        lat={lat}
        lng={lng}
        onMapViewChange={handleMapViewChange}
        zoom={zoom}
      />
    </div>
  );
}

export default App;
