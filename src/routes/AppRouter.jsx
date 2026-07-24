import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import MyEvents from "../pages/MyEvents";
import AddEvent from "../pages/AddEvent";
import EditEvent from "../pages/EditEvent";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<MyEvents />} />
        <Route path="/events/add" element={<AddEvent />} />
        <Route path="/events/edit/:id" element={<EditEvent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;