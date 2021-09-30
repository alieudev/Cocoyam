import { Carousel } from 'react-bootstrap'

function CarouselInfo({restaurant}){

  console.log(restaurant)
  if (restaurant.length > 0 ) {
    return <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={restaurant.photos[0]}
        alt="First slide"
        style={{wight:"300px"}}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={restaurant.photos[1]}
        alt="Second slide"
        style={{wight:"300px"}}
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={restaurant.photos[2]}
        alt="Third slide"
        style={{wight:"300px"}}
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel> ;
  }
  return <p>Loading...</p>;
}

export default CarouselInfo;

