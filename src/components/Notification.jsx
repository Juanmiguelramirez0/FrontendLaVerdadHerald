// src/components/Notification.jsx
import React, { useEffect } from "react";

export default function Notification({ message, type = "info", onClose, duration = 10000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration); // auto close after duration
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const bgColor = type === "success" ? "#4caf50" :
                  type === "error" ? "#f44336" : "#2196f3";

  return (
    <div style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", 
      padding: "16px 32px",
      backgroundColor: bgColor,
      color: "#fff",
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      zIndex: 9999,
      minWidth: 250,
      textAlign: "center",
      fontWeight: 500,
      fontSize: 16,
    }}>
      {message}
    </div>
  );
}
