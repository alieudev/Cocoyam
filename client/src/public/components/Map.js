import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpZXVkZXYiLCJhIjoiY2t0dTl2MXhrMXk4MDJubWhzYmFmbTJseiJ9.FfXQKfMK2PTDm_i_i7GBRA';

export default function Map(){
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-74.9);
  const [lat, setLat] = useState(40.35);
  const [zoom, setZoom] = useState(3);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });
  
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });
    });

    return(
    <div>
        <div ref={mapContainer} className="map-container" />
      </div>
    )
}