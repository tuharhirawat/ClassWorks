import React from "react";

function ListCard({ id, data, onDelete }) {
  return (
    <div className="list-card">
      <h3>{data.name}</h3> {/* Example field */}
      <p>{data.details}</p> {/* Example field */}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default ListCard;
