import { Link } from "react-router-dom";
import "../styles/css/ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1 className="logo">🌸 EventSphere</h1>

        <h2>Forgot Password?</h2>

        <p className="subtitle">
          Enter your email and we'll send you a password reset link.
        </p>

        <form className="auth-form">

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button type="submit" className="auth-btn">
            Send Reset Link
          </button>

        </form>

        <p className="bottom-text">
          Remember your password?{" "}
          <Link to="/login">Log In</Link>
        </p>

      </div>
    </div>
  );
}

export default ForgotPassword;