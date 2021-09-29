import React, {useEffect, useState} from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMaps = () => {

  const [locationOfRest, setLocationOfRest] = useState();

  useEffect(() => {
    fetch("/all_locations")
    .then(res => res.json())
    .then( data => setLocationOfRest(data))
  }, [])
  
  const mapStyles = {        
    height: "50vh",
    width: "50%"};
  
  const defaultCenter = {
    lat: 40.730610, lng: -73.935242
  }
  const locations = locationOfRest.map( rest => { return (
    {name : rest.name, 
    location: { 
      lat: parseFloat(rest.lat), 
      lng: parseFloat(rest.long) 
    } 
  })})

  console.log(locations)
  
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBknD2P1oluRXj4UzMnn3bIEzAYQnomsDo'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={defaultCenter}>
          {locations.map(item => {
              return (
                <Marker key={item.name} position={item.location} />
              )
            })
          }
        </GoogleMap>
     </LoadScript>
  )
}

export default GoogleMaps;