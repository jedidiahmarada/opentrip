import React from "react";
import H from "@here/maps-api-for-javascript";
// import styles from '../styles/Map.module.css'

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    // the reference to the container
    this.ref = React.createRef();
    // reference to the map
    this.map = null;
  }

  componentDidMount() {
    if (!this.map) {
      // instantiate a platform, default layers and a map as usual
      const platform = new H.service.Platform({
        apikey: "{9R930Zk_H189jZo1pLm_UK00ZNjuOXWXhkIVqMIPt8I}",
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(this.ref.current, layers.vector.normal.map, {
        pixelRatio: window.devicePixelRatio,
        center: { lat: -8.90799, lng: 116.75249 },
        zoom: 5,
      });
      this.map = map;
      // attach the listener
      map.addEventListener("mapviewchange", this.handleMapViewChange);
      // add the interactive behaviour to the map
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    }
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.removeEventListener("mapviewchange", this.handleMapViewChange);
    }
  }

  handleMapViewChange = (ev) => {
    const { onMapViewChange } = this.props;
    if (ev.newValue && ev.newValue.lookAt) {
      const lookAt = ev.newValue.lookAt;
      // adjust precision
      const lat = Math.trunc(lookAt.position.lat * 1e7) / 1e7;
      const lng = Math.trunc(lookAt.position.lng * 1e7) / 1e7;
      const zoom = Math.trunc(lookAt.zoom * 1e2) / 1e2;
      onMapViewChange(zoom, lat, lng);
    }
  };

  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "300px",
          }}
          ref={this.ref}
        />
        {/*<input/>*/}
      </div>
    );
  }
}
