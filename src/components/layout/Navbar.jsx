import { Link } from "react-router-dom";
import "../../styles/css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🌸 <span>EventSphere</span>
      </div>

      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#reviews">Reviews</a></li>
      </ul>

      <div className="nav-actions">
        <Link to="/login" className="login-link">
          Log In
        </Link>

        <Link to="/register">
          <button className="signup-btn">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;