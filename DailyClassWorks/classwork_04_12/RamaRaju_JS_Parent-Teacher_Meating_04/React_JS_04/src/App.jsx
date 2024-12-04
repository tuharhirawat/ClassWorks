import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import SlotList from "./components/slotlist";
import "./App.css";

const App = () => {
  const [slots, setSlots] = useState([
    { id: 1, time: "9:00 AM", booked: false },
    { id: 2, time: "10:00 AM", booked: false },
    { id: 3, time: "11:00 AM", booked: false },
  ]);
  const [parentName, setParentName] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Book a slot
  const bookSlot = () => {
    if (!parentName || !selectedSlot) {
      alert("Please provide a name and select a slot.");
      return;
    }

    setSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.id === selectedSlot ? { ...slot, booked: true } : slot
      )
    );
    setParentName("");
    setSelectedSlot(null);
    alert(`Slot booked for ${parentName}`);
  };

  return (
    <div className="container">
      <h1>Parent-Teacher Meeting Scheduler</h1>
      <BookingForm
        parentName={parentName}
        setParentName={setParentName}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
        slots={slots}
        bookSlot={bookSlot}
      />
      <SlotList slots={slots} />
    </div>
  );
};

export default App;
