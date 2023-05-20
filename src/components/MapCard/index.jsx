import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';

const MapCard = ({ address }) => {
  const mapContainerStyle = {
    width: '400px',
    height: '300px',
  };

  const [center, setCenter] = useState(null);

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        Geocode.setApiKey('AIzaSyC-ftlurTyS77Vwdd2pHJws9q__3ygadGY');
        const response = await Geocode.fromAddress(`${address.street}, ${address.neighborhood} - ${address.city}`);
        const { lat, lng } = response.results[0].geometry.location;
        setCenter({ lat, lng });
      } catch (error) {
        console.log('Error fetching address coordinates:', error);
      }
    };

    getCoordinates();
  }, [address]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyC-ftlurTyS77Vwdd2pHJws9q__3ygadGY">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        {center && <Marker position={center} />}
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

  const formattedAddress = `${address.street}, ${address.neighborhood} - ${address.city}`;

  return (
    <div>
      <h1>Google Maps Card Example</h1>
      <h2>Address: {formattedAddress}</h2>
      <MapCard address={address} />
    </div>
  );
};

export default App;