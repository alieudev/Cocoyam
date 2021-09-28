import '../App.css'
import { useState } from "react";

const Signup= ({onLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  
  const handleSubmit= (e) => {
    e.preventDefault();
    fetch("/signup", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username: username,
       password: password,
       password_confirmation: passwordConfirmation
    }),
    })
    .then((r) => {if (r.ok) {r.json().then((user) => onLogin(user));} 
    else {r.json().then((err) => setErrors(err.errors));}
    });
  }
    return (
           <div className="login">
          <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="username" 
            value={username}  
            onChange={(e) => setUsername(e.target.value)}
            />
            <input 
            type="password" 
            placeholder="password" 
            value={password}   
            onChange={(e) => setPassword(e.target.value)}
            /> 
        <input 
            type="password" 
            placeholder="password confirmation" 
            value={passwordConfirmation}   
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            /> 
            <input type="submit" value="Sign Up"/>
          </form>
        </div> 
    )
}

export default Signup;