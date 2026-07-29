import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import "../styles/css/AddEvent.css";

function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event added successfully!");
  };

  return (
    <AppLayout>
      <div className="add-event">
        <h1>Add Event</h1>

        <form onSubmit={handleSubmit} className="event-form">

          <input
            type="text"
            name="title"
            placeholder="Event Title"
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
            <option value="">Choose Category</option>
            <option>Birthday</option>
            <option>Work</option>
            <option>Travel</option>
            <option>Fitness</option>
            <option>Personal</option>
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
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
          />

          <button type="submit">
            Save Event
          </button>

        </form>
      </div>
    </AppLayout>
  );
}

export default AddEvent;