import React from "react";

const BookingForm = ({
  parentName,
  setParentName,
  selectedSlot,
  setSelectedSlot,
  slots,
  bookSlot,
}) => (
  <div className="form-container">
    <h2>Book a Slot</h2>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        bookSlot();
      }}
    >
      <label>
        Parent Name:
        <input
          type="text"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Select Slot:
        <select
          value={selectedSlot || ""}
          onChange={(e) => setSelectedSlot(Number(e.target.value))}
        >
          <option value="" disabled>
            Choose a slot
          </option>
          {slots.map(
            (slot) =>
              !slot.booked && (
                <option key={slot.id} value={slot.id}>
                  {slot.time}
                </option>
              )
          )}
        </select>
      </label>
      <br />
      <button type="submit">Book Slot</button>
    </form>
  </div>
);

export default BookingForm;
