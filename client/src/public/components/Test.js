import { useState, useEffect } from "react";
import "../styles/test.css"
import CarouselInfo from "./CarouselInfo"
import { Carousel } from 'react-bootstrap'
import ReviewForm from "./ReviewForm";

function Test(){
    const [comments, setComments] = useState([])
    const [business, setBusiness] = useState({ photos: ""})

    useEffect( ()=> {
        fetch('/test')
        .then(res => res.json())
        .then(
            data => {
                setComments(data.reviews)
            })
    }, [])

    useEffect( ()=> {
        fetch('/business')
        .then(res => res.json())
        .then(
            data => {
                setBusiness(data)
            })
    }, [])
    
    if (business.photos === undefined){return (<p>Loading</p>)}
    return(<>
    {/* <CarouselInfo restaurant = {business} /> */}
    {business && 
    <Carousel fade style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
    <Carousel.Item>
      <img
        style={{width:"60%", height: "60%", float:"center"}}
        src={business.photos[0]}
        alt="First slide"
        
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{width:"60%", height: "600px"}}
        src={business.photos[1]}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{width:"60%", height: "600px"}}
        src={business.photos[2]}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel> }
    <div className="reviews-container">
        <h1> Reviews </h1>
        <div>
            {comments.map( item => 
                <div key={item.id}>
                    <img style={{ width: '60px', height : '60px'}} src={item.user.image_url} alt={item.user.name}></img>
                    <p>{item.rating}</p>
                    <p>{item.text}</p>
                    <p>{item.date_created}</p>
                    <p>User: {item.user.name}</p>
                </div>
                )}
        </div>
        <ReviewForm />
    </div>
    </>)
}

export default Test; 