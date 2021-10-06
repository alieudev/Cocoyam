

function Carousel({photo}){
    return(<Carousel.Item>
        <img
          className="d-block w-100"
          src={photo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>First slide label</h1>
          <Rating icon='star' size="x-large" defaultRating={4} maxRating={5} />
        </Carousel.Caption>
      </Carousel.Item>)
}