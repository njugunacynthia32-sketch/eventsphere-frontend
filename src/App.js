import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Landing Page
import Home from "./pages/Home";

// Authentication Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

// Dashboard Pages
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import MyEvents from "./pages/MyEvents";
import Profile from "./pages/Profile";

// Other Pages
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes (We'll protect these later with JWT) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<MyEvents />} />
        <Route path="/events/add" element={<AddEvent />} />
        <Route path="/events/edit/:id" element={<EditEvent />} />
        <Route path="/profile" element={<Profile />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;