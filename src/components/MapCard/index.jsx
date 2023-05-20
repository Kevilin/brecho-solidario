import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapCard = ({ address }) => {
  const mapContainerStyle = {
    width: '400px',
    height: '300px',
  };

  const center = {
    lat: 0, // Latitude do endereço
    lng: 0, // Longitude do endereço
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC-ftlurTyS77Vwdd2pHJws9q__3ygadGY">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

const App = () => {
  const address = {
    street: 'Rua Bolivia',
    neighborhood: 'Sao Jose',
    city: 'Canoas',
  };

  const formattedAddress = `${address.city}`;

  return (
    <div>
      <h1>Google Maps Card Example</h1>
      <h2>Address: {formattedAddress}</h2>
      <MapCard address={address} />
    </div>
  );
};

export default App;