import React from "react";
import Slot from "./slot";

const SlotList = ({ slots }) => (
  <div className="slot-list">
    <h2>Available Slots</h2>
    {slots.every((slot) => slot.booked) ? (
      <p>All slots are booked.</p>
    ) : (
      <ul>
        {slots.map((slot) => (
          <Slot key={slot.id} slot={slot} />
        ))}
      </ul>
    )}
  </div>
);

export default SlotList;
