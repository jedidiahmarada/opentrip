import React from 'react';
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
        apikey: '{9R930Zk_H189jZo1pLm_UK00ZNjuOXWXhkIVqMIPt8I}'
      });
      const layers = platform.createDefaultLayers();
      const map = new H.Map(
        this.ref.current,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio,
          center: {lat: -8.90799, lng: 116.75249},
          zoom: 5,
        },
      );
      this.map = map;
    }
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height:'300px',
        }}
        ref={this.ref}
      />
    )
  }
}
