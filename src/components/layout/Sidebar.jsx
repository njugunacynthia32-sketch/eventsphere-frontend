import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiCalendar,
  FiPlusCircle,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import "../../styles/css/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">🌸 EventSphere</h2>

      <nav className="sidebar-nav">

        <NavLink to="/dashboard" className="nav-item">
          <FiHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/events" className="nav-item">
          <FiCalendar />
          <span>My Events</span>
        </NavLink>

        <NavLink to="/events/add" className="nav-item">
          <FiPlusCircle />
          <span>Add Event</span>
        </NavLink>

        <NavLink to="/profile" className="nav-item">
          <FiUser />
          <span>Profile</span>
        </NavLink>

      </nav>

      <button className="logout-btn">
        <FiLogOut />
        <span>Logout</span>
      </button>
    </aside>
  );
}

export default Sidebar;