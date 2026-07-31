import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import api from "../services/api";
import "../styles/css/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    full_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await api.getProfile();
      setUser(data);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async () => {
    try {
      await api.updateProfile({
        full_name: user.full_name,
        phone: user.phone,
      });

      alert("Profile updated successfully");
      setEditing(false);
    } catch (err) {
      alert(err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppLayout>
      <div className="profile-container">
        <h1>My Profile</h1>

        <div className="profile-card">
          <div className="profile-avatar">
            {user.full_name ? user.full_name.charAt(0) : "U"}
          </div>

          <div className="profile-info">
            <label>Full Name</label>
            <input
              type="text"
              name="full_name"
              value={user.full_name}
              onChange={handleChange}
              readOnly={!editing}
            />

            <label>Email</label>
            <input
              type="email"
              value={user.email}
              readOnly
            />

            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone || ""}
              onChange={handleChange}
              readOnly={!editing}
            />

            <div className="profile-buttons">
              {!editing ? (
                <button
                  className="edit-profile-btn"
                  onClick={() => setEditing(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  className="edit-profile-btn"
                  onClick={saveProfile}
                >
                  Save Changes
                </button>
              )}

              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Profile;