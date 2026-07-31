import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import api from "../services/api";
import "../styles/css/AddEvent.css";

function AddEvent() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category_id: "",
  });

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await api.getCategories();
      setCategories(data);
    } catch (err) {
      console.log(err);
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
      await api.createEvent({
        ...formData,
        user_id: 1,
      });

      alert("Event created successfully!");

      navigate("/events");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <AppLayout>
      <div className="add-event">
        <h1>Add Event</h1>

        <form className="event-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <select
  name="category_id"
  value={formData.category_id}
  onChange={handleChange}
  required
>
  <option value="">Choose Category</option>

  {categories.length > 0 ? (
    categories.map((category) => (
      <option
        key={category.id}
        value={category.id}
      >
        {category.name}
      </option>
    ))
  ) : (
    <>
      <option value="1">Birthday</option>
      <option value="2">Work</option>
      <option value="3">Travel</option>
      <option value="4">Fitness</option>
      <option value="5">Personal</option>
    </>
  )}
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
            rows="5"
            placeholder="Description"
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
