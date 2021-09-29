import RestaurantList from "../components/RestaurantList";
import GoogleMaps from "../components/GoogleMaps";
import "../styles/homepage.css"

export default function HomePage({restaurants}){
    return(
        <>
            <div className="map">
                <GoogleMaps />
            </div>
            <RestaurantList restaurants={restaurants}/>
        </>        
    )
}