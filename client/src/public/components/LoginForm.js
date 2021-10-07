import React, { useState } from "react";
import { Button, Form} from 'react-bootstrap'

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
  
return (<div class="col-6 offset-3 mt-5">
  <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicUsername">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </Form.Group>

  {/* <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password Confirmation</Form.Label>
    <Form.Control type="password" placeholder="Password confirmation" />
  </Form.Group> */}

  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
</div>);}
  
  export default LoginForm;

  // <div >
  //   {/* class="col-10 offset-1" */}
  //   <Form onSubmit={handleSubmit}>
  //     <label>
  //       Enter Username
  //       <input className="login" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
  //     </label>
  //     <br/>
  //     <label>
  //       Enter Password
  //       <input className="login" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  //     </label>
      
  //     <Button className="login" type="submit" value="Login"/>
  //   </Form>
  // </div> 