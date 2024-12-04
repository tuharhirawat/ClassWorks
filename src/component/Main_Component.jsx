import React, { useState } from "react";

// Helper function for formatting the date
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

const Main_Component = () => {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({ name: "", date: "", time: "", reason: "" });
  const [availableSlots, setAvailableSlots] = useState([
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: true },
  ]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle appointment submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.time) return;

    // Check if the selected time is available
    const slotIndex = availableSlots.findIndex(
      (slot) => slot.time === form.time && slot.available
    );
    if (slotIndex === -1) {
      alert("Selected time slot is unavailable.");
      return;
    }

    // Create a new appointment and update states
    setAppointments((prev) => [
      ...prev,
      { ...form, date: new Date(form.date).toISOString(), time: form.time },
    ]);

    // Mark the slot as unavailable
    const updatedSlots = [...availableSlots];
    updatedSlots[slotIndex].available = false;
    setAvailableSlots(updatedSlots);

    // Reset the form
    setForm({ name: "", date: "", time: "", reason: "" });
  };

  // Handle cancel or reschedule action
  const handleCancelOrReschedule = (index, action) => {
    const updatedAppointments = [...appointments];
    const appointment = updatedAppointments[index];

    if (action === "cancel") {
      // Mark the time slot as available again
      const slotIndex = availableSlots.findIndex((slot) => slot.time === appointment.time);
      const updatedSlots = [...availableSlots];
      updatedSlots[slotIndex].available = true;
      setAvailableSlots(updatedSlots);

      // Remove the appointment from the list
      updatedAppointments.splice(index, 1);
    } else if (action === "reschedule") {
      // Allow rescheduling by marking the slot as available again
      const slotIndex = availableSlots.findIndex((slot) => slot.time === appointment.time);
      const updatedSlots = [...availableSlots];
      updatedSlots[slotIndex].available = true;
      setAvailableSlots(updatedSlots);

      // Remove the appointment and reset the form
      updatedAppointments.splice(index, 1);
      setAppointments(updatedAppointments);
      setForm({ ...appointment });
    }

    setAppointments(updatedAppointments);
  };

  return (
    <div className="container">
      <h1>Doctor Appointment Scheduler</h1>
      
      {/* Form for scheduling appointments */}
      <AppointmentForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        availableSlots={availableSlots}
      />

      {/* List of appointments */}
      <AppointmentList
        appointments={appointments}
        formatDate={formatDate}
        handleCancelOrReschedule={handleCancelOrReschedule}
      />
    </div>
  );
};

export default Main_Component;
