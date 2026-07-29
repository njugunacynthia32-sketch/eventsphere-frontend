import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import "../styles/css/Profile.css";

function Profile() {
  const [user] = useState({
    name: "Cynthia Njuguna",
    email: "cynthia@example.com",
    phone: "+254712345678",
    bio: "Software Engineering Student | Event Planner",
  });

  return (
    <AppLayout>
      <div className="profile-container">
        <h1>My Profile</h1>

        <div className="profile-card">
          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>

          <div className="profile-info">
            <label>Full Name</label>
            <input type="text" value={user.name} readOnly />

            <label>Email</label>
            <input type="email" value={user.email} readOnly />

            <label>Phone</label>
            <input type="text" value={user.phone} readOnly />

            <label>Bio</label>
            <textarea rows="4" value={user.bio} readOnly />

            <div className="profile-buttons">
              <button className="edit-profile-btn">Edit Profile</button>
              <button className="logout-btn">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Profile;