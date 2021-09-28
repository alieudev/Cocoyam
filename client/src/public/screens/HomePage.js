import Map from "../components/Map";
import RestaurantList from "../components/RestaurantList";
import GoogleMaps from "../components/GoogleMaps";

export default function HomePage(){
    return(
        <>
            <GoogleMaps />
            <Map />
            <RestaurantList />
        </>        
    )
}