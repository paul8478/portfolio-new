import React from "react";

function SubjectsCard({ subject, level }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <strong>{subject}</strong> - {level}
    </div>
  );
}

export default SubjectsCard;
