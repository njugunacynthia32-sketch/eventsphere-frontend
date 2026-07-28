import { Link } from "react-router-dom";
import "../styles/css/Login.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1 className="logo">🌸 EventSphere</h1>

        <h2>Welcome Back!</h2>

        <p className="subtitle">
          Sign in to continue planning your beautiful moments.
        </p>

        <form className="auth-form">

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />

          <div className="forgot-link">
            <Link to="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="auth-btn">
            Log In
          </button>

        </form>

        <p className="bottom-text">
          Don't have an account?{" "}
          <Link to="/register">Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;