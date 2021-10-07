import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import ReviewForm from "../components/ReviewForm";
import { Rating } from 'semantic-ui-react'

export default function ShowCard(){

    const [restaurant, setRestaurant] = useState([])
    const [reviews, setReviews] = useState([])
    
    let { id, user } = useParams();

    useEffect(()=>{
        fetch(`/restaurants/${id}`)
        .then(res => res.json())
        .then(data => {
        setRestaurant(data)
        setReviews(data.reviews)
        })
    },[id])

    // Fetch reviews for restaurant 

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

    console.log(restaurant)

    function handleDelete(){}
    function handleEdit(){}
    function handleReview(){}

    // function handleReview(e){ 
    //         e.preventDefault();
    //         fetch(`/restaurant/${id}`, {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify({ username, password }),
    //         }).then((r) => {
    //           if (r.ok) {
    //             r.json().then((user) => onLogin(user));
    //           } 
    //         });
    // }
    return(
    <div class="row">
        <div class="col-6 mt-3 ">
            <div class="card mb-3">
                <img class="img-fluid" style={{width: "100%", height: "200px", objectFit: "cover"}} alt="" src={restaurant.image}/>
                <div class="card-body">
                    <h5 class="card-title">{restaurant.name}</h5>
                    <Rating icon='star' defaultRating={5} maxRating={5} />
                </div>
                {/* <ul class="list-group list-group-flush">
                    <li class="list-group-item text-muted">{restaurant.street}</li>
                </ul> */}
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
                    <Marker key={locationOfRest.name} position={locationOfRest.location} />
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
                {review.user && (review.user.id === id)? <button class="btn btn-sm btn-danger">Delete</button> : ""} )  
            </div>
            </div>
            ))}
            <br />
            <ReviewForm handleReview={handleReview}></ReviewForm>
        
        </div>
    </div>)
}

    // return(
    //     <div className="row">
    //         <div className="col-6 offset-3">
    //             <div class="card mb-3">
    //                 {restaurant && <img src={restaurant.image} className="card-img-top" style={{height:"400px"}} alt="..." /> }
    //                 <div className="card-body">
    //                     {restaurant && <h5 className="card-title">{restaurant.name}</h5>}
    //                     <p className="card-text">This is a desc</p>
    //                 </div>
    //                 <ul className="list-group list-group-flush">
    //                     <li className="list-group-item text-muted">{restaurant.street}</li>
    //                 </ul>
    //                 <div className="card-body">
    //                     <a className="card-link btn btn-info" href="#" alt="...">Edit</a>
    //                     <form className="d-inline"  method="POST">
    //                         <button className="btn btn-danger">Delete</button>
    //                     </form>
    //                 </div>
    //                 <div className="card-footer text-muted">
    //                     Open or Close ? 
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="row sm-12">
    //             <div className="col-6">
    //                 <h1>Reviews</h1>
    //                 <div className="reviews">
    //                     {reviews.map( review => (
    //                     <div className="review">
    //                         <h3>{review.name}</h3>
    //                         <p>{review.remarks}</p>
    //                         <p>Rating: {review.rating}</p>
    //                     </div>))}
    //                 </div>
    //             <ReviewForm></ReviewForm >
    //             </div>

    //             <div className="col-6">
    //                 
    //                 <div className="address">{restaurant.street}</div>
    //             </div>
    //         </div>
    //     </div>
    // )


