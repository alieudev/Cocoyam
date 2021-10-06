import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Carousel, Col} from 'react-bootstrap'
import ReviewForm from "./ReviewForm";
import "../styles/carousel.css"
import { Rating, Image} from 'semantic-ui-react'

export default function RestaurantCard(){

    const [restaurant, setRestaurant] = useState([])
    const [reviews, setReviews] = useState([])
    const [comments, setComments] = useState([])
    const [business, setBusiness] = useState({photos:[]})
    
    useEffect( ()=> {
        fetch('/test')
        .then(res => res.json())
        .then( data => {setComments(data.reviews)})
    }, [])

    useEffect( ()=> {
        fetch('/business')
        .then(res => res.json())
        .then( data => { setBusiness(data) })
    }, [])

    let { id } = useParams();


    useEffect(()=>{
        fetch(`/restaurants/${id}`)
        .then(res => res.json())
        .then(data => {
        setRestaurant(data)
        setReviews(data.reviews)
        })
    },[id])

    business && console.log(business)
    comments && console.log(comments)

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

    function handleDelete(){}
    function handleEdit(){}
    return(
        <div className="row">
            <div className="col-6 offset-3">
                <div class="card mb-3">
                    {business && <img src={business.image_url} className="card-img-top" alt="..." /> }
                    <div className="card-body">
                        {business && <h5 className="card-title">{business.name}</h5>}
                        <p className="card-text">This is a desc</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-muted">{business.street}</li>
                    </ul>
                    <div className="card-body">
                        <a className="card-link btn btn-info" href="#" alt="...">Edit</a>
                        <form className="d-inline"  method="POST">
                            <button className="btn btn-danger">Delete</button>
                        </form>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>

            <div className="row sm-12">
                <div className="col-6">
                    <h1>Reviews</h1>
                    <div className="reviews">
                        {comments.map( review => (
                        <div className="review">
                            <h3>{review.user.name}</h3>
                                <Image src={review.user.image_url} alt={review.name} roundedCircle />
                            <p>{review.text}</p>
                        </div>))}
                    </div>
                <ReviewForm></ReviewForm >
                </div>

                <div className="col-6">
                    <h2>Location and Address</h2>
                    <LoadScript className="map"
                        googleMapsApiKey='AIzaSyBknD2P1oluRXj4UzMnn3bIEzAYQnomsDo'>
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={15}
                            center={locationOfRest.location}>
                        <Marker key={locationOfRest.name} position={locationOfRest.location} />
                        </GoogleMap>
                    </LoadScript>
                    <div className="address">{business.street}</div>
                </div>

                
            </div>

        </div>)
    
}


// return(
//     <div className="card-container" >
//         <section className="carousel-container">
//         <Carousel>
//             <Carousel.Item>
//                 <img
//                 className="d-block w-100"
//                 src="https://s3-media0.fl.yelpcdn.com/bphoto/u_0uErK2_8ZlKuRXYBozBg/o.jpg"
//                 alt="Third slide"
//                 />
        
//                 <Carousel.Caption>
//                 <h1>{business.name}</h1>
//                 <Rating icon='star' defaultRating={4} maxRating={5} />
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                 className="d-block w-100"
//                 src="https://s3-media0.fl.yelpcdn.com/bphoto/u_0uErK2_8ZlKuRXYBozBg/o.jpg"
//                 alt="Second slide"
//                 />
        
//                 <Carousel.Caption>
//                 <h1>{business.name}</h1>
//                 <Rating icon='star' defaultRating={4} maxRating={5} />
//                 </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <img
//                 className="d-block w-100"
//                 src="https://s3-media0.fl.yelpcdn.com/bphoto/u_0uErK2_8ZlKuRXYBozBg/o.jpg"
//                 alt="Third slide"
//                 />
        
//                 <Carousel.Caption>
//                 <h1>{business.name}</h1>
//                 <Rating icon='star' defaultRating={4} maxRating={5} />
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel> 
//         </section>
//         <br/> 

//         
//     </div>)



