import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';


// Coordinates of Acropolis in Athens, Greece
const center = {
  lat: 37.970833,
  lng: 23.726110,
};

function App() {
  return (
    <div className="App">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <span>Acropolis, Athens</span>
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
        >
          <MarkerF position={center} />
        </GoogleMap>
       </LoadScript>
    </div>
  );
}

export default App;