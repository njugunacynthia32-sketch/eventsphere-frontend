import { useEffect, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import api from "../services/api";
import "../styles/css/Dashboard.css";

function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await api.getEvents();
      setEvents(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppLayout>
      <header className="dashboard-header">
        <h1>Welcome Back 👋</h1>
        <p>Here's an overview of your upcoming plans.</p>
      </header>

      <section className="stats">
        <div className="stat-card">
          <h2>{events.length}</h2>
          <p>Total Events</p>
        </div>

        <div className="stat-card">
          <h2>{events.length}</h2>
          <p>Upcoming</p>
        </div>

        <div className="stat-card">
          <h2>4</h2>
          <p>Categories</p>
        </div>
      </section>

      <section className="upcoming-events">
        <h2>Upcoming Events</h2>

        {events.length === 0 ? (
          <p>No events yet. Create your first event!</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p>
                {event.date} • {event.time}
              </p>
            </div>
          ))
        )}
      </section>
    </AppLayout>
  );
}

export default Dashboard;