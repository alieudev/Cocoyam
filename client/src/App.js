import './App.css';
import React, { useEffect, useState } from 'react';
import HomePage from './public/screens/HomePage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TopRestaurants from './public/screens/Top10';
import Header from './public/components/Header';
import Login from './public/screens/Login';
import RestaurantList from './public/components/RestaurantList';

function App(){
  const [user, setUser] = useState(null); 

  useEffect(()=>{
    fetch("/me")
    .then((response) => { 
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handelLogin(user){
    setUser(user);
  }

  function handleLogout(){
    setUser(null);
  }


  return(<>
    <Header user={user} onLogout={handleLogout}/>
    <Router>
      <Switch>
        <Route exact path="/top_restaurants">
          <TopRestaurants />
        </Route>

        <Route exact path="/all_restaurants">
          <RestaurantList />
        </Route>

        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/homepage">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </>)
}

export default App;
