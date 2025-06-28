import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import các file CSS chính
import "./styles/main.css"; // Chứa Tailwind và custom styles
import "./styles/theme.css"; // Chứa biến theme và animation

// Tạo root và render ứng dụng
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
