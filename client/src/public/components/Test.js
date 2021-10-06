import { useState, useEffect } from "react";
import { Carousel } from 'react-bootstrap'
import ReviewForm from "./ReviewForm";
import { Rating, Image } from 'semantic-ui-react'
import "../styles/carousel.css"

function Test(){
    
  return (
    <div className ="carousel-container">
      

</div> )}
export default Test; 


//     if (business.photos === undefined){return (<p>Loading</p>)}
//     return(<>
//     {business && 
//     <Carousel fade >
//     <Carousel.Item>
//       <Image
//         src={business.photos[0]}
//         alt="First slide"
//         size='medium'
        
//       />
//       <Carousel.Caption>
//         <h3>{business.name}</h3>
//         {business.rating > 1 && <Rating icon='star' defaultRating={business.rating} maxRating={5} />}
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         style={{width:"60%", height: "600px"}}
//         src={business.photos[1]}
//         alt="Second slide"
//       />
  
//       <Carousel.Caption>
//         <h3>{business.name}</h3>
//         {business && <Rating icon='star' defaultRating={business.rating} maxRating={5} />}
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item>
//       <img
//         style={{width:"60%", height: "600px"}}
//         src={business.photos[2]}
//         alt="Third slide"
//       />
  
//       <Carousel.Caption>
//         <h3>{business.name}</h3>
//         {business && <Rating icon='star' defaultRating={business.rating} maxRating={5} />}
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel> }
//     <div className="reviews-container">
//         <h1> Reviews </h1>
//         <div>
//             {comments.map( item => 
//                 <div key={item.id}>
//                     <img style={{ width: '60px', height : '60px'}} src={item.user.image_url} alt={item.user.name}></img>
//                     <p>{item.rating}</p>
//                     <p>{item.text}</p>
//                     <p>{item.date_created}</p>
//                     <p>User: {item.user.name}</p>
//                 </div>
//                 )}
//         </div>
//         
//     </div>
//     </>)
// }
