const API_URL = "https://eventsphere-backend-ow3e.onrender.com/api";


const request = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    method: options.method || "GET",
    headers,
    body: options.body,
  });

  const text = await response.text();

  let data = {};

  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = {
      message: text || "Server returned an invalid response",
    };
  }

  if (!response.ok) {
    throw new Error(
      data.message || `Request failed with status ${response.status}`
    );
  }

  return data;
};

const api = {
  register: (userData) =>
    request("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    }),

  login: (credentials) =>
    request("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),

  forgotPassword: (email) =>
    request("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    }),

  resetPassword: (token, newPassword) =>
    request("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({
        token,
        new_password: newPassword,
      }),
    }),

  getEvents: () =>
    request("/events/"),

  getEvent: (id) =>
    request(`/events/${id}`),

  createEvent: (event) =>
    request("/events/", {
      method: "POST",
      body: JSON.stringify(event),
    }),

  updateEvent: (id, event) =>
    request(`/events/${id}`, {
      method: "PUT",
      body: JSON.stringify(event),
    }),

  deleteEvent: (id) =>
    request(`/events/${id}`, {
      method: "DELETE",
    }),

  getProfile: () =>
    request("/profile/"),

  updateProfile: (profile) =>
    request("/profile/", {
      method: "PUT",
      body: JSON.stringify(profile),
    }),

  getCategories: () =>
    request("/categories/"),

  createCategory: (category) =>
    request("/categories/", {
      method: "POST",
      body: JSON.stringify(category),
    }),
};

export default api;