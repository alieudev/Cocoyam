import React, {useEffect, useState} from "react";
import "../styles/restaurant_list.css"
export default function RestaurantList(){
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("/restaurants")
          .then((res) => res.json())
          .then((data) => setRestaurants(data))
      }, []);

    return(
    <section className ="restaurant-list">
        {restaurants.map((restaurant) => (
            <div key={restaurant.id} >
                <img src={restaurant.image} alt={restaurant.name} />
                <h2>{restaurant.name}</h2>
                <p>Location: {restaurant.location}</p>
                <p>{restaurant.description}</p>
                <button >Delete</button>
                <button >Edit</button>
            </div>
        ))}
  </section>
    );
};