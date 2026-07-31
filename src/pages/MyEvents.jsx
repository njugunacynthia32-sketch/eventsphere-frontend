import { useEffect, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import EventCard from "../components/common/EventCard";
import api from "../services/api";
import "../styles/css/MyEvents.css";

function MyEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await api.getEvents();
      setEvents(data);
    } catch (err) {
      alert(err.message);
    }
  };

  const removeEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <AppLayout>
      <div className="my-events">
        <h1>My Events</h1>

        <div className="events-toolbar">
          <input type="text" placeholder="Search events..." />

          <select>
            <option>All Categories</option>
          </select>
        </div>

        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          events.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              category={event.category_id}
              date={event.date}
              time={event.time}
              onDelete={removeEvent}
            />
          ))
        )}
      </div>
    </AppLayout>
  );
}

export default MyEvents;