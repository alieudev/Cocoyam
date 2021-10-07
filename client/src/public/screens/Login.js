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
    // return(<div>
    // <NavBar />
    // <Segment placeholder variant="light" style={{width: "1400px", height:"800px"}}>
    //   <Grid columns={2} relaxed='very' stackable>
    //     <Grid.Column>
    //       <Form primary onSubmit={handleSubmit}>
    //         <Form.Input
    //           icon='user'
    //           iconPosition='left'
    //           label='Username'
    //           placeholder='Username'
    //           value={username} 
    //           onChange={(e) => setUsername(e.target.value)}
    //         />
    //         <Form.Input
    //           icon='lock'
    //           iconPosition='left'
    //           label='Password'
    //           type='password'
    //           placeholder='Password'
    //           value={password} onChange={(e) => setPassword(e.target.value)}
    //         />
  
    //         <Button color="blue" type="submit" content='Login'  />
    //       </Form>
    //     </Grid.Column>
  
    //     <Grid.Column verticalAlign='middle'>
    //       <Button content='Sign up' icon='signup' size='big' ><Nav.Link href="/signup" />
    //       </Button>
    //     </Grid.Column>
    //   </Grid>
  
    //   <Divider vertical>Or</Divider>
    // </Segment>
    // </div>)
}

export default Login;