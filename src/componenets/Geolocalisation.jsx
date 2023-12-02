import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const GeolocationMap = () => {
  const [position, setPosition] = useState([51.505, -0.09]); 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (geoPosition) => {
        const { latitude, longitude } = geoPosition.coords;
        setPosition([latitude, longitude]);
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );
  }, []);

  return (
    <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Votre position actuelle</Popup>
      </Marker>
    </MapContainer>
  );
};

export default GeolocationMap;
