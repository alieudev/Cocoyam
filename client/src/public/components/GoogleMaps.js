import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const GoogleMaps = () => {
  
  const mapStyles = {        
    height: "50vh",
    width: "50%"};
  
  const defaultCenter = {
    lat: 40.730610, lng: -73.935242
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBknD2P1oluRXj4UzMnn3bIEzAYQnomsDo'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default GoogleMaps;