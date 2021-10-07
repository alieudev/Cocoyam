import React, {useEffect, useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import { Link } from 'react-router-dom'

const GoogleMaps = () => {

  const [locationOfRest, setLocationOfRest] = useState([]);
  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }

  useEffect(() => {
    fetch("/all_locations")
    .then(res => res.json())
    .then( data => 
      {console.log(data)
      setLocationOfRest(data)}
      )

  }, [])
  
  const mapStyles = {        
    height: "75vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 40.80, lng: -73.94
  }
  const locations = locationOfRest.map( rest => { return (
    {id : rest.id,
    name : rest.name, 
    location: { 
      lat: parseFloat(rest.lat), 
      lng: parseFloat(rest.long) 
    }, 
    image : rest.image 
  })})
  
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBknD2P1oluRXj4UzMnn3bIEzAYQnomsDo'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={11}
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
              <div style={{ width: "300px", height: "300px"}}>
                <div className="address"></div>
                <h2>{selected.name}</h2>
                <img style={{ width:"250px", height:"200px"}} src={selected.image} alt={selected.name} />
                <br />
                <button className="link"><Link to={`restaurants/${selected.id}`}>View Restaurant</Link></button>
                </div>
              
            </InfoWindow>
            )
         }
        </GoogleMap>
     </LoadScript>
  )
}

export default GoogleMaps;