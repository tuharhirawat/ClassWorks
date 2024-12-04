import React, { useState } from 'react';

const FlightInput = ({ onSubmit }) => {
  const [flightNumber, setFlightNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(flightNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="flightNumber">Flight Number:</label>
      <input
        id="flightNumber"
        type="text"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
      />
      <button type="submit">Get Baggage Info</button>
    </form>
  );
};

export default FlightInput;