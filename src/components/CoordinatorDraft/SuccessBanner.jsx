import React, { useEffect, useState } from "react";

export default function SuccessBanner({
  message = "Action successful!",
  duration = 3000,
  onHide,
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onHide) onHide();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onHide]);

  if (!visible) return null;

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#c3f7c3",
        color: "#1d4e1d",
        padding: "10px 0",
        textAlign: "center",
        fontWeight: 500,
        fontSize: "15px",
        borderBottom: "1px solid #a8e6a8",
        marginBottom: "10px", // spacing before DRAFTS
      }}
    >
      {message}
    </div>
  );
}
