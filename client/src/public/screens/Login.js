import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";


function Login({ onLogin }) {

  const [showLogin, setShowLogin] = useState(true);

    return (
      <div >
      <div >
         <div>
      {showLogin ? (
        <>
      <LoginForm onLogin={onLogin} />
      <div className="login">
      Don't have an account? <button className="login" onClick={()=> setShowLogin(false)}>Sign up</button>
      </div>
      </>
      ) : (
        <>
        <SignUpForm onLogin={onLogin} />
        <br />
        Already have an account? <button onClick={()=> setShowLogin(true)}>Log in</button>
        </>
      )}
    </div>
        </div>
        </div>
    )
}

export default Login;