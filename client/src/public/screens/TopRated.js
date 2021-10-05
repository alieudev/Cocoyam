import RestaurantDetail from "../components/RestaurantDetail"
import { useEffect, useState } from "react"
import "../styles/restaurant_list.css"

export default function TopRated(){
    const [ restaurants, setRestaurants] = useState([]);
    
    useEffect(()=> {
        fetch("/top_restaurants")
        .then((res) => res.json())
        .then((data) => setRestaurants(data))
    }, [])

    return(<>
        <RestaurantDetail restaurants={restaurants} />
    </>)
}