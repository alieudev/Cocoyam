import IndexPage from "../screens/IndexPage";
import GoogleMaps from "../components/GoogleMaps";
import Search from "../components/Search";

export default function HomePage({restaurants, onSearch, searchTerm}){
    return(
        <>
            <div className="col-10 offset-1 mt-4 ">
                <GoogleMaps restaurants={restaurants}/>
            </div>
            <br />
            <Search onSearch={onSearch} />
            <br />
            <br />
            <br />
            <IndexPage searchTerm={searchTerm} restaurants={restaurants}/>
        </>        
    )
}