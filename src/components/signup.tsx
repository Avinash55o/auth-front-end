import "../assets/styles/signup.css";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const Signup = () => {
  const signupWithGoogle = () => {
    window.open("http://localhost:1234/signup", "_self");
  };

  return (
    <div className="wrapper">
    
        <form className="signup-form" action="">
          <h1 className="signup-heading">Signup</h1>

          <div className="input-box">
          <input
              type="text"
              placeholder="Username"
              required
            />
            <FaUserLarge className="icon" />
          </div>

          <div className="input-box">
          <input
              type="email"
              placeholder="Email"
              required
            />
            <MdEmail className="icon" />
          </div>
            
          <div className="input-box"> 
            <input
              type="password"
              placeholder="Password"
              required
            />
            <FaLock className="icon" />
          </div>
            
            <button className="signup-button">Create Account</button>
            <p className="login-text">
              Already registered? <a href="/login">Login here</a>
            </p>
          
        </form>
        <button className="google-button" onClick={signupWithGoogle}>
          Signup with Google
        </button>
     </div>
  
  );
};

export default Signup;
