import "../../styles/css/Features.css";

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-header">
        <h2>Everything you need to stay organized</h2>
        <p>
          Built for the modern multitasker who wants life to feel effortless.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">📅</div>
          <h3>Smart Calendar</h3>
          <p>
            Visualize your month with a beautiful calendar and keep every event
            in one place.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⏰</div>
          <h3>Gentle Reminders</h3>
          <p>
            Receive timely reminders so you never miss birthdays, meetings, or
            important moments.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🏷️</div>
          <h3>Event Categories</h3>
          <p>
            Organize work, travel, birthdays, fitness, and personal events with
            colorful categories.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;