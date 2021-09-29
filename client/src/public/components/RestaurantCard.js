import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function RestaurantCard(){

    const [restaurant, setRestaurant] = useState([])
    const [reviews, setReviews] = useState([])

    let { id } = useParams();

    useEffect(()=>{
        fetch(`/restaurants/${id}`)
        .then(res => res.json())
        .then(data => {
        setRestaurant(data)
        setReviews(data.reviews)
        })
    },[id])

    const locationOfRest = {
        name: restaurant.name,
        location: { 
          lat: parseFloat(restaurant.lat),
          lng: parseFloat(restaurant.long)
        }
    }

    const mapStyles = {        
        height: "50vh",
        width: "50%"
    };

    function handleDelete(){}
    function handleEdit(){}
      
    return(<>
        <div key={restaurant.id} className="rest-info">
            <img src={restaurant.image} alt={restaurant.name} />
            <p>Location: {restaurant.street}</p>
            <p>Long: {restaurant.long} lat: {restaurant.lat}</p>
            <p>Rating: {restaurant.rating}</p>
        </div>
        <div className="reviews">
            <h1>Reviews</h1>
            {reviews.map(review => (
                
                <div key={review.id}>
                <p>{review.remarks}</p>
                <p>{review.user}</p>
                <button onClick={()=>handleDelete}>Delete</button>
                <button onClick={()=>handleEdit}>Edit</button>
                </div>
            ))}
        </div>

        <LoadScript
        googleMapsApiKey='AIzaSyBknD2P1oluRXj4UzMnn3bIEzAYQnomsDo'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={locationOfRest.location}>
        <Marker key={locationOfRest.name} position={locationOfRest.location} />
        
        </GoogleMap>
     </LoadScript>
    </>)
}



