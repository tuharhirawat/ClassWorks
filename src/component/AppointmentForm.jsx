import React from "react";

const AppointmentForm = ({ form, handleChange, handleSubmit, availableSlots }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <select
        name="time"
        value={form.time}
        onChange={handleChange}
        required
      >
        <option value="">Select a time slot</option>
        {availableSlots.map((slot, index) => (
          <option
            key={index}
            value={slot.time}
            disabled={!slot.available}
          >
            {slot.time} {slot.available ? "" : "(Unavailable)"}
          </option>
        ))}
      </select>
      <textarea
        name="reason"
        value={form.reason}
        onChange={handleChange}
        placeholder="Reason for visit"
      />
      <button type="submit">Schedule Appointment</button>
    </form>
  );
};

export default AppointmentForm;
