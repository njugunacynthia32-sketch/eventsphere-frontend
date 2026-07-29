import AppLayout from "../components/layout/AppLayout";
import EventCard from "../components/common/EventCard";
import "../styles/css/MyEvents.css";

function MyEvents() {
  const events = [
    {
      id: 1,
      title: "Sophie's Birthday",
      category: "Birthday",
      date: "24 July 2026",
      time: "6:00 PM",
    },
    {
      id: 2,
      title: "Team Meeting",
      category: "Work",
      date: "26 July 2026",
      time: "10:00 AM",
    },
    {
      id: 3,
      title: "Nairobi Trip",
      category: "Travel",
      date: "30 July 2026",
      time: "8:00 AM",
    },
  ];

  return (
    <AppLayout>
      <div className="my-events">
        <h1>My Events</h1>

        <div className="events-toolbar">
          <input type="text" placeholder="Search events..." />

          <select>
            <option>All Categories</option>
            <option>Birthday</option>
            <option>Work</option>
            <option>Travel</option>
            <option>Fitness</option>
          </select>
        </div>

        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            category={event.category}
            date={event.date}
            time={event.time}
          />
        ))}
      </div>
    </AppLayout>
  );
}

export default MyEvents;