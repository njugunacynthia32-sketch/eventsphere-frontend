import "../../styles/css/Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Plan every
          <br />
          moment,
          <br />
          beautifully.
        </h1>

        <p>
          EventSphere helps you organize birthdays,
          travel, work events and everything in between
          in one beautiful place.
        </p>

        <div className="hero-buttons">

          <Link to="/register">
            <button className="primary-btn">
              Get Started
            </button>
          </Link>

          <Link to="/login">
            <button className="secondary-btn">
              Sign In
            </button>
          </Link>

        </div>

      </div>

      <div className="hero-right">

        <div className="calendar-card">

          <h3>July 2026</h3>

          <p>📅 3 Events this week</p>

          <hr />

          <p>🧘 Yoga Class - 7:30 AM</p>

          <p>💼 Team Standup - 10:00 AM</p>

          <p>🎂 Sophie's Birthday - 6:00 PM</p>

        </div>

      </div>

    </section>
  );
}

export default Hero;