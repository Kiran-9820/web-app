import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = () => {
  const mapStyles = {
    height: "60vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974
  };

  const defaultZoom = 10;

  return (
    <LoadScript googleMapsApiKey="AIzaSyAr1nIQv1JKrn2s77eDV0LeIvhzNhfnSDs">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={defaultZoom}
        center={defaultCenter}
      >
        {/* <Marker position={{ lat: -34.397, lng: 150.644 }} /> */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;