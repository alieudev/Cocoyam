import { useState } from "react";
import SignUpForm from '../components/SignUpForm'
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";
import { Button } from 'react-bootstrap'
// import { Button, Segment, Grid, Form, Divider} from 'semantic-ui-react'
// import {Nav} from 'react-bootstrap'

function Login({ onLogin }) {

  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } 
      });
    }

    return (
      <div >
        <div className="login">
          <div>
            {showLogin ? (
              <div >
                <NavBar />
                <LoginForm onLogin={onLogin} />
                <br />
                <div className="col-6 offset-3">
                Don't have an account? <Button onClick={()=> setShowLogin(false)}>Sign up</Button>
                </div>
              </div>
            ) : (
              <div >
                <NavBar />
                <SignUpForm onLogin={onLogin} />
                <br />
                <div className="col-6 offset-3">
                  Already have an account? <Button onClick={()=> setShowLogin(true)}>Log in</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
   )
}

export default Login;