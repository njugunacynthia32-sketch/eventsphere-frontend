import { Link } from "react-router-dom";
import "../styles/css/Register.css";

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1 className="logo">🌸 EventSphere</h1>

        <h2>Create Your Account</h2>

        <p className="subtitle">
          Start organizing your beautiful moments today.
        </p>

        <form className="auth-form">

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
          />

          <button type="submit" className="auth-btn">
            Create Account
          </button>

        </form>

        <p className="bottom-text">
          Already have an account?{" "}
          <Link to="/login">Log In</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;