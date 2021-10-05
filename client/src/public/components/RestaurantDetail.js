import { Nav } from 'react-bootstrap'
import "../styles/restaurant_list.css"

function RestaurantDetail({restaurants}) {
  return (<>
    {restaurants.length > 1 && restaurants.map((restaurant) => (
      <div key={restaurant.id} className="restaurant-list">
        <div className="card">
          <h2>{restaurant.name}</h2>
          <img src={restaurant.image} alt={restaurant.name} />
          <p>Location: {restaurant.street}</p>
          <p>Long: {restaurant.long} lat: {restaurant.lat}</p>
          <p>Rating: {restaurant.rating}</p>
          <button><Nav.Link href={`/restaurants/${restaurant.id}`}>View Restaurant</Nav.Link></button>
        </div>
      </div>

    ))}
    </>);
  }

  export default RestaurantDetail;