import React, { Component, useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';

// Mobx
import storeTarget from '../../Mobx/Models/resultSelectStatus'

// Backend Data
import { targetGeo } from '../../Backend/frontendData/targetGeo'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAYh5E5OAf_Xn_Gkuf1I0fKJoZKmE5Sy6E' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;