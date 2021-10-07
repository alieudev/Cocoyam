import { useParams, useHistory } from "react-router"
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ReviewForm from "../components/ReviewForm";
import { Rating } from 'semantic-ui-react'

export default function ShowCard({user}){

    const history = useHistory()
    const [restaurant, setRestaurant] = useState([])
    const [reviews, setReviews] = useState([])
    const [remarks, setRemarks] = useState("")
    const [userrating, setUserrating] = useState(0)
    
    let { id} = useParams();

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
        }, 
        photo: restaurant.photo
    }
    const mapStyles = {        
        height: "50vh",
        width: "100%"
    };

    const handleDelete = async (e, review) => {
        e.preventDefault()
        const res = await fetch(`/reviews/${review.id}`, {
            method: 'DELETE',
            headers: { Accept: 'application/json' }
        });
            const parsedBody = await res.json();
            console.log(parsedBody)
            setReviews(reviews.filter(comment => comment.id !== review.id ));
            history.push(`/restaurants/${restaurant.id}`);
    }


const handleEdit = async (e) => {
    e.preventDefault()
    const res = await fetch(`/restaurant/${restaurant.id}`, {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json',
            Accept: 'application/json' 
        },
        body: JSON.stringify({
            name: user.name,
            rating: userrating,
            remarks: remarks,
            image: "",
            user_id: user.id,
            restaurant_id: restaurant.id
        })
    });
        const parsedBody = await res.json();
        // setPlayerList(players.map(player => player.id === parseInt(id) ? parsedBody : player));
        console.log(parsedBody)
        history.push(`/restaurants/${restaurant.id}`);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`/reviews`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                Accept: 'application/json' 
            },
            body: JSON.stringify({
                name: "Alieu B.",
                remarks: remarks,
                restaurant_id: restaurant.id,
                user_id: user.id, 
                rating: userrating
            })
        });
            const parsedBody = await res.json();
            setReviews([...reviews, parsedBody])
            setUserrating(0)
            setRemarks("")
            history.push(`/restaurants/${restaurant.id}`);
    }

    
    return(
    <div class="col-10 offset-1">
    <div class="row ">
        <div class="col-6 mt-3 ">
            <div class="card mb-3">
                <img class="img-fluid" style={{width: "100%", height: "200px", objectFit: "cover"}} alt="" src={restaurant.image}/>
                <div class="card-body">
                    <h5 class="card-title">{restaurant.name}</h5>
                    <Rating icon='star' defaultRating={5} maxRating={5} />
                </div>
                <p class="card-text">
                      <small class="text-muted">
                        <div>
                          <p>{restaurant.street}</p>
                          <p>{restaurant.city}</p>
                          <p>{restaurant.state}</p>
                        </div>
                        </small>
                  </p>
            </div>
            <div id='map' >
                <h2>Location</h2>
                <LoadScript className="map"
                    googleMapsApiKey='AIzaSyBknD2P1oluRXj4UzMnn3bIEzAYQnomsDo'>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={15}
                        center={locationOfRest.location}>
                    <Marker key={ locationOfRest.name} position={locationOfRest.location} />
                    </GoogleMap>
                </LoadScript>
            </div>

        </div>

        <div class="col-6 mt-3">
            <h1>Reviews</h1>
            {reviews.map( review => (
            <div class="card mb-2 ">
            <div class="card-body">
                <h5 class="card-title">{review.name}</h5>
                <Rating icon='star' defaultRating={review.rating} maxRating={5} />
                <p class="card-text">{review.remarks}</p>
                { review.user_id === user.id ? <div> <button class="btn btn-sm btn-info" onClick={handleEdit}>Edit</button>        <button class="btn btn-sm btn-danger" onClick={(e) => handleDelete(e, review)}>Delete</button> </div>  : ""}   
            </div>
            </div>
            ))}
            <br />
            <ReviewForm setRemarks={setRemarks} remarks={remarks}  rating={userrating} setRating={setUserrating} handleReview={handleSubmit}></ReviewForm>
        
        </div>
    </div>
    </div>)
}
