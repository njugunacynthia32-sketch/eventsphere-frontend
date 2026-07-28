import { Link } from "react-router-dom";
import "../../styles/css/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-text">

          <span className="badge">
            ✨ Loved by 12,000+ planners
          </span>

          <h1>
            Plan every
            <br />
            moment,
            <br />
            beautifully.
          </h1>

          <p>
            EventSphere helps you organize birthdays, work, travel,
            fitness, and every special moment in one beautiful place.
          </p>

          <div className="hero-buttons">

            <Link to="/register" className="btn-primary">
              Start Planning
            </Link>

            <button className="btn-secondary">
              See It in Action
            </button>

          </div>

        </div>

        <div className="hero-card">

          <h3>📅 July 2026</h3>

          <div className="event">
            <span>🧘 Yoga Class</span>
            <small>07:30 AM</small>
          </div>

          <div className="event">
            <span>💼 Team Standup</span>
            <small>10:00 AM</small>
          </div>

          <div className="event">
            <span>🎂 Sophie's Birthday</span>
            <small>06:00 PM</small>
          </div>

          <div className="reminder">
            ✨ Reminder Set!
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
