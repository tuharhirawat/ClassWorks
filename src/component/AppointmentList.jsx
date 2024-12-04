import React from "react";

const AppointmentList = ({ appointments, formatDate, handleCancelOrReschedule }) => {
  return (
    <div>
      <h2>Scheduled Appointments</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <strong>{appointment.name}</strong> - {formatDate(appointment.date)} ({appointment.time})
            <br />
            Reason: {appointment.reason}
            <br />
            <button onClick={() => handleCancelOrReschedule(index, "cancel")}>Cancel</button>
            <button onClick={() => handleCancelOrReschedule(index, "reschedule")}>Reschedule</button>
          </li>
        ))}
      </ul>
      {appointments.length === 0 && <p>No appointments scheduled yet.</p>}
    </div>
  );
};

export default AppointmentList;
