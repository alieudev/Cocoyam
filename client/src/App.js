import Login from './public/screens/Login';
import NavBar from './public/components/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import HomePage from './public/screens/HomePage';
import TopRated from './public/screens/TopRated';
import ShowCard from './public/screens/ShowCard';
import IndexPage from './public/screens/IndexPage';
import './App.css';
import Signup from './public/screens/Signup';

function App() {

  const [user, setUser] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {if (r.ok) { r.json().then((user) => setUser(user));} });
  }, []);

  useEffect(() => {
      fetch("/restaurants")
        .then((res) => res.json())
        .then((data) => setRestaurants(data))
    }, []);

  function handleOnChange(event){ setSearch(event.target.value) }

  if (!user) return <Login onLogin={setUser} />;

  
  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
         <Router>
            <Switch>
              <Route exact path="/">
                <HomePage onSearch={handleOnChange} searchTerm={search} restaurants={restaurants}/>
              </Route>
              <Route exact path="/restaurants">
                <IndexPage searchTerm={search} restaurants={restaurants}/>
              </Route>
              <Route exact path="/top_restaurants">
                <TopRated searchTerm={search}/>
              </Route>
              <Route exact path="/restaurants/:id">
                <ShowCard user={user}/>
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
         </Router>
    </div>
  );
}

export default App;