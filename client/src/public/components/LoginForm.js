import React, { useState } from "react";

function LoginForm({ onLogin }) {
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
<div className="login">
<form onSubmit={handleSubmit}>
            <input className="login" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input className="login" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input className="login" type="submit" value="Login"/>
          </form>
        </div>
    );
  }
  
  export default LoginForm;