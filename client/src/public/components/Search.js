import "../styles/search.css" 
const Search = () => {
    return(
    <div id="container">
        <form action="/" method="get" id="search-form">
        <input type="text" name="search" placeholder="Search for restaurant" />
        <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Search;