import { Button, Nav } from 'react-bootstrap'
import { Rating, Card, Image  } from 'semantic-ui-react';
import "../styles/restaurant_list.css"

function RestaurantDetail({restaurants, searchTerm}) {

  const searchResults = restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchTerm) )
  console.log(searchTerm)

  return (<Card.Group size='tiny' >
    {restaurants.length > 1  && searchResults.map((restaurant) => (<>
      <Card key={restaurant.id} size='tiny'>
      <div className="image-container">
        <Image src={restaurant.image} style={{ width: "200px", height: "200px"}}alt={restaurant.name}  wrapped ui={false} />
      </div>
      <Card.Content>
      <p>Location: {restaurant.street}</p>
      <Rating icon='star' defaultRating={restaurant.rating < 1 ? 1 : restaurant.rating } maxRating={5} />
      <br />
      <Button color="red" ><Nav.Link href={`/restaurants/${restaurant.id}`}>View Restaurant</Nav.Link></Button>
      </Card.Content>
      {/* <Card.Content extra>
      </Card.Content> */}
    </Card>
    </>
    ))}
    </Card.Group>);
  }

  export default RestaurantDetail;