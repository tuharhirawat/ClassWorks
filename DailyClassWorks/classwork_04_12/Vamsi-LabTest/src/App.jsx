import React, { useState } from 'react';
import TestBookingForm from './TestBookingForm';
import TestStatus from './TestStatus';
import './App.css';

function App() {
  const [testBookings, setTestBookings] = useState([]);
  const [showStatus, setShowStatus] = useState(true); 

  // Function to add a new test booking to the state
  const handleNewBooking = (booking) => {
    setTestBookings((prevBookings) => [...prevBookings, booking]);
  };

  // Function to delete a booking from the state
  const handleDeleteBooking = (id) => {
    setTestBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
  };

  // Toggle the view between booking form and status
  const toggleView = () => {
    setShowStatus(!showStatus);
  };

  return (
    <div className="App">
      <h1>Lab Test Scheduler</h1>
      <nav>
        <button onClick={toggleView}>
          {showStatus ? 'Back to Booking' : 'View Test Status'}
        </button>
      </nav>

      {showStatus ? (
        <TestStatus testBookings={testBookings} DeleteBooking={handleDeleteBooking} />
      ) : (
        <TestBookingForm onNewBooking={handleNewBooking} />
      )}
    </div>
  );
}

export default App;
