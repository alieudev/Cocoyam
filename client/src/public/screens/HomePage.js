import RestaurantList from "../components/RestaurantList";
import GoogleMaps from "../components/GoogleMaps";
import "../styles/homepage.css"
import Search from "../components/Search";

export default function HomePage({restaurants, onSearch, searchTerm}){
    return(
        <>
            <div className="map">
                <GoogleMaps restaurants={restaurants}/>
            </div>
            <br />
            <Search onSearch={onSearch} />
            <br />
            <br />
            <br />
            <RestaurantList searchTerm={searchTerm} restaurants={restaurants}/>
        </>        
    )
}