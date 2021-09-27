import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import "/Users/alieubaldeh/Development/code/phase5/cocoyam/client/src/App.css"

function Login({setErrors, setUser}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loginErrors, setLoginErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            email,
            password
        }
       
        fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(json => {
          console.log('hi')
            if(json.error){
              setLoginErrors(json.error)
            }else{
              setEmail(json)
              setErrors(false)
            }
        })
    }
    return (
        <section className="login-form"> 
        <Form onSubmit={onSubmit}>
        <h1 variant="primary">Please Login</h1>
        <br></br>
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <br></br>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label >Password</Form.Label>
            <br></br>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="danger" type="submit">
            Log In
         </Button>
      </Form>
      {loginErrors?loginErrors.map(e => <div>{e}</div>):null}
    </section>
    )
}
export default Login;