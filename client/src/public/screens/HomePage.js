import RestaurantList from "../components/RestaurantList";
import GoogleMaps from "../components/GoogleMaps";
import "../styles/homepage.css"
import Search from "../components/Search";

export default function HomePage({restaurants}){
    return(
        <>
            <div className="map">
                <GoogleMaps restaurants={restaurants}/>
            </div>
            <Search />
            <RestaurantList restaurants={restaurants}/>
        </>        
    )
}