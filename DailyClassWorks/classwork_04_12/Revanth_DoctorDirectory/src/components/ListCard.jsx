import React from "react";

function ListCard({ id, data, deleteProfile }) {
  return (
    <div className="list-card">
      <h3>Id: {id}</h3>
      <p>Name: {data.name}</p>
      <p>Speciality: {data.speciality}</p>
      <p>State: {data.state}</p>
      <div className="btns">
        <button type="button" onClick={() => deleteProfile(id)}>
          Delete Profile
        </button>
      </div>
    </div>
  );
}

export default ListCard;
