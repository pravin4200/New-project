// StudentCard.js
import React, { useState } from "react";

function StudentCard({ name, course, semester, email, phone, city }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{
      background: "#222",
      color: "white",
      padding: "20px",
      borderRadius: "8px",
      width: "300px",
      margin: "10px auto"
    }}>
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Semester: {semester}</p>

      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          background: "#0af",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div style={{ marginTop: "10px" }}>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>City: {city}</p>
        </div>
      )}
    </div>
  );
}

export default StudentCard;
