import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } 
    });
  }

  return (
    <div className="login">
         
       <form onSubmit={handleSubmit}>
        <label>Enter Username
        <input 
         className="login" 
         type="text" 
         placeholder="username" 
         value={username}  
         onChange={(e) => setUsername(e.target.value)}
         />
        </label>
         

      <label>Enter Password
      <input 
         className="login" 
         type="password" 
         placeholder="password" 
         value={password}   
         onChange={(e) => setPassword(e.target.value)}
         /> 
      </label>
         

        <input 
         className="login" 
         type="password" 
         placeholder="password confirmation" 
         value={passwordConfirmation}   
         onChange={(e) => setPasswordConfirmation(e.target.value)}
         /> 
        
         <input 
         className="login" 
         type="submit" 
         value="Sign Up"
         />

       </form>
     </div>
    
 )
}

export default SignUpForm;