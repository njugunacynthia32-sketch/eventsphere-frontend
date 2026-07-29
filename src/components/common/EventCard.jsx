import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "../../styles/css/EventCard.css";

function EventCard({ title, category, date, time }) {
  return (
    <div className="event-card">
      <div className="event-info">
        <h3>{title}</h3>

        <span className="category">{category}</span>

        <p>{date} • {time}</p>
      </div>

      <div className="event-actions">
        <button className="edit-btn">
          <FiEdit2 />
          Edit
        </button>

        <button className="delete-btn">
          <FiTrash2 />
          Delete
        </button>
      </div>
    </div>
  );
}

export default EventCard;