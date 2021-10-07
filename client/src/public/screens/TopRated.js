import RestaurantDetail from "./IndexPage"
import { useEffect, useState } from "react"

export default function TopRated({searchTerm}){
    const [ restaurants, setRestaurants] = useState([]);
    
    useEffect(()=> {
        fetch("/top_restaurants")
        .then((res) => res.json())
        .then((data) => setRestaurants(data))
    }, [])

    return(<>
        <RestaurantDetail searchTerm={searchTerm} restaurants={restaurants} />
    </>)
}