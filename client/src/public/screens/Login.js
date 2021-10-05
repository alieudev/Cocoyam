import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import NavBar from "../components/NavBar";
import "../styles/login.css"

function Login({ onLogin }) {

  const [showLogin, setShowLogin] = useState(true);

    return (
      <div >
        <div className="login">
          <div>
            {showLogin ? (
              <div >
                <NavBar />
                <LoginForm onLogin={onLogin} />
                <br />
                <div>
                Don't have an account? <button onClick={()=> setShowLogin(false)}>Sign up</button>
                </div>
              </div>
            ) : (
              <div >
                <NavBar />
                <SignUpForm onLogin={onLogin} />
                <br />
                <div>
                  Already have an account? <button onClick={()=> setShowLogin(true)}>Log in</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
}

export default Login;