import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import api from "../services/api";
import "../styles/css/AddEvent.css";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category_id: "",
  });

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    try {
      const event = await api.getEvent(id);

      setFormData({
        title: event.title,
        description: event.description || "",
        date: event.date,
        time: event.time,
        location: event.location || "",
        category_id: event.category_id,
      });
    } catch (err) {
      alert(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.updateEvent(id, formData);
      alert("Event updated successfully");
      navigate("/events");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <AppLayout>
      <div className="add-event">
        <h1>Edit Event</h1>

        <form className="event-form" onSubmit={handleSubmit}>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

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
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <textarea
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleChange}
          />

          <button type="submit">
            Update Event
          </button>
        </form>
      </div>
    </AppLayout>
  );
}

export default EditEvent;
