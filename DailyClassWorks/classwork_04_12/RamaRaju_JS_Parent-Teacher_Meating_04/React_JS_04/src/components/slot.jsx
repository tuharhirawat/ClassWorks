import React from "react";

const Slot = ({ slot }) => (
  <li className={`slot ${slot.booked ? "booked" : "available"}`}>
    {slot.time} - {slot.booked ? "Booked" : "Available"}
  </li>
);

export default Slot;
