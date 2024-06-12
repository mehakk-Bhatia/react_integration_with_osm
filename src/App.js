import React from 'react';
import MapComponent from './MapComponent';

function App() {
  const latitude = 31.842825; 
  const longitude = 74.762962; 

  return (
    <div className="App">
      <h1>maps integration</h1>
      <MapComponent latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
