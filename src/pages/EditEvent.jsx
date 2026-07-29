import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import "../styles/css/AddEvent.css";

function EditEvent() {
  const [formData, setFormData] = useState({
    title: "Sophie's Birthday",
    category: "Birthday",
    date: "2026-07-24",
    time: "18:00",
    location: "Nairobi",
    description: "Birthday celebration with family and friends.",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event updated successfully!");
  };

  return (
    <AppLayout>
      <div className="add-event">
        <h1>Edit Event</h1>

        <form className="event-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Birthday">Birthday</option>
            <option value="Work">Work</option>
            <option value="Travel">Travel</option>
            <option value="Fitness">Fitness</option>
            <option value="Personal">Personal</option>
          </select>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />

          <textarea
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />

          <button type="submit">Update Event</button>
        </form>
      </div>
    </AppLayout>
  );
}

export default EditEvent;