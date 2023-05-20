import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";

const MapCard = ({ address }) => {
  const mapContainerStyle = {
    width: "400px",
    height: "300px",
  };

  const formattedAddress = `${address.street}, ${address.neighborhood} - ${address.city}`;

  const [center, setCenter] = useState(null);

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        Geocode.setApiKey("AIzaSyC-ftlurTyS77Vwdd2pHJws9q__3ygadGY");
        const response = await Geocode.fromAddress(
          `${address.street}, ${address.neighborhood} - ${address.city}`
        );
        const { lat, lng } = response.results[0].geometry.location;
        setCenter({ lat, lng });
      } catch (error) {
        console.log("Error fetching address coordinates:", error);
      }
    };

    getCoordinates();
  }, [address]);

  return (
    <div>
      <h1>{formattedAddress}</h1>
      <br></br>
      <LoadScript googleMapsApiKey="AIzaSyC-ftlurTyS77Vwdd2pHJws9q__3ygadGY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          {center && <Marker position={center} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapCard;
