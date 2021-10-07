import { Button, Card } from 'react-bootstrap'
import { Rating } from 'semantic-ui-react'

function IndexPage({restaurants, searchTerm}) {

  const searchResults = restaurants && restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchTerm) )

  return(<div class="col-10 offset-1">
    {searchResults.map((restaurant) => (
      <div class="card mb-3">
      <div class="row">
          <div class="col-md-4">
              <img class="img-fluid" style={{width: "100%", height: "200px", objectFit: "cover"}} alt="" src={restaurant.image}/>
          </div>
          <div class="col-md-8">
              <div class="card-body">
                  <h5 class="card-title">{restaurant.name}</h5>
                  <Rating icon='star' defaultRating={restaurant.rating} maxRating={5} />
                  <p class="card-text">
                      <small class="text-muted">
                        <div>
                          <p>{restaurant.street}</p>
                          <p>{restaurant.city}</p>
                          <p>{restaurant.state}</p>
                        </div>
                        </small>
                  </p>
                  <a class="btn btn-primary" href={`restaurants/${restaurant.id}`}>View Restaurant</a>
              </div>
          </div>
      </div>
  </div>
    ))}
  </div>);
}
  export default IndexPage;
