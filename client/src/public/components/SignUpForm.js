import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap'

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
  <div class="col-6 offset-3 mt-5">
    <Form onSubmit={onLogin}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" placeholder="Password confirmation" value={passwordConfirmation}   
        onChange={(e) => setPasswordConfirmation(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  </div>)
}


export default SignUpForm;

{/*
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
  
 <br />
<label>Enter Password
<input 
  className="login" 
  type="password" 
  placeholder="password" 
  value={password}   
  onChange={(e) => setPassword(e.target.value)}
  /> 
</label>
<br />
<label>
 Confirm Password
 <input 
   className="login" 
   type="password" 
   placeholder="password confirmation" 
   value={passwordConfirmation}   
   onChange={(e) => setPasswordConfirmation(e.target.value)}
   /> 
</label>
 
 
  <input 
  className="login" 
  type="submit" 
  value="Sign Up"
  />

</form>
</div> */}