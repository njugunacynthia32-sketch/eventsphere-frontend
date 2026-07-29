import AppLayout from "../components/layout/AppLayout";
import "../styles/css/Dashboard.css";

function Dashboard() {
  return (
    <AppLayout>
      <header className="dashboard-header">
        <h1>Welcome Back 👋</h1>
        <p>Here's an overview of your upcoming plans.</p>
      </header>

      <section className="stats">
        <div className="stat-card">
          <h2>12</h2>
          <p>Total Events</p>
        </div>

        <div className="stat-card">
          <h2>5</h2>
          <p>Upcoming</p>
        </div>

        <div className="stat-card">
          <h2>4</h2>
          <p>Categories</p>
        </div>
      </section>

      <section className="upcoming-events">
        <h2>Upcoming Events</h2>

        <div className="event-card">
          <h3>🎂 Sarah's Birthday</h3>
          <p>Tomorrow • 6:00 PM</p>
        </div>

        <div className="event-card">
          <h3>💼 Team Meeting</h3>
          <p>Friday • 10:00 AM</p>
        </div>

        <div className="event-card">
          <h3>✈️ Nairobi Trip</h3>
          <p>Saturday • 8:00 AM</p>
        </div>
      </section>
    </AppLayout>
  );
}

export default Dashboard;