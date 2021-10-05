import React, {useEffect, useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';

const GoogleMaps = () => {

  const [locationOfRest, setLocationOfRest] = useState([]);
  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }

  useEffect(() => {
    fetch("/all_locations")
    .then(res => res.json())
    .then( data => setLocationOfRest(data))
  }, [])
  
  const mapStyles = {        
    height: "75vh",
    width: "75%"};
  
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
  
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBknD2P1oluRXj4UzMnn3bIEzAYQnomsDo'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={defaultCenter}>
          {locations.map(item => {
              return (
                <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)} />
              )
            })}
          {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <div>
                This is your restaurant info
                <p>{selected.name}{selected.location.lat}</p>
                </div>
              
            </InfoWindow>
            )
         }
        </GoogleMap>
     </LoadScript>
  )
}

export default GoogleMaps;