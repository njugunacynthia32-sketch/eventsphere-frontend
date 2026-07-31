import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "../../styles/css/EventCard.css";

function EventCard({
  id,
  title,
  category,
  date,
  time,
  onDelete,
}) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("Delete this event?")) return;

    try {
      await api.deleteEvent(id);
      onDelete(id);
      alert("Event deleted.");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="event-card">
      <div className="event-info">
        <h3>{title}</h3>

        <span className="category">
          Category {category}
        </span>

        <p>
          {date} • {time}
        </p>
      </div>

      <div className="event-actions">
        <button
          className="edit-btn"
          onClick={() => navigate(`/events/edit/${id}`)}
        >
          <FiEdit2 />
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          <FiTrash2 />
          Delete
        </button>
      </div>
    </div>
  );
}

export default EventCard;
