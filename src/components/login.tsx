import "../assets/styles/login.css";
import { FaLock } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

const login = () => {
  const loginwithgoogle = () => {
    window.open("http://localhost:1234/auth/google/callback", "_self");
  };

  return (
    <div className="login-wrapper">
      <form className="login-form">
        <h1 className="login-heading">Login</h1>

        <div className="login-input">
          <input type="text" placeholder="username" required />
          <FaUserLarge className="icon-login" />
        </div>
        <div className="login-input">
          <input type="password" placeholder="password" required />
          <FaLock className="icon-login" />
        </div>

        <button className="login-button">Login</button>
        <p className="signup-text">
          Not Registerd? <a href="/signup">Creaat Account</a>
        </p>
      </form>
      <button className="google-button" onClick={loginwithgoogle}>
        login with google
      </button>
    </div>
  );
};
export default login;
