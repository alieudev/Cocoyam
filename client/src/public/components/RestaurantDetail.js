import { Nav } from 'react-bootstrap'
import "../styles/restaurant_list.css"

function RestaurantDetail({restaurants}) {
  return (<>
    {restaurants.map((restaurant) => (
      <div key={restaurant.id} className="restaurant-list">
        <div className="card">
          <Nav.Link href={`/restaurants/${restaurant.id}`}></Nav.Link>
          <h2>Name: {restaurant.name}</h2>
          <img src={restaurant.image} alt={restaurant.name} />
          <p>Location: {restaurant.street}</p>
          <p>Long: {restaurant.long} lat: {restaurant.lat}</p>
          <p>Rating: {restaurant.rating}</p>
        </div>
      </div>

    ))}
    </>);
  }

  export default RestaurantDetail;