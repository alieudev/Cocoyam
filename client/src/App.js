import Login from './public/screens/Login';
import NavBar from './public/components/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import HomePage from './public/screens/HomePage';

function App() {

  const [user, setUser] = useState(false);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
         <Router>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
            </Switch>
         </Router>
    </div>
  );
}

export default App;