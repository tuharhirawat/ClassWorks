import React, { useState } from 'react';

function TestBookingForm({ onNewBooking }) {
  const [name, setName] = useState('');
  const [testType, setTestType] = useState('');
  const [testDate, setTestDate] = useState('');
  const [status, setStatus] = useState('Pending'); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      id: Date.now(),
      name,
      testType,
      testDate,
      status,
    };

    onNewBooking(newBooking); 

  
    setName('');
    setTestType('');
    setTestDate('');
  };

  return (
    <div>
      <h2>Book a New Lab Test</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label>Test Type:</label>
        <input
          type="text"
          value={testType}
          onChange={(e) => setTestType(e.target.value)}
          required
        />
        <br />

        <label>Test Date:</label>
        <input
          type="date"
          value={testDate}
          onChange={(e) => setTestDate(e.target.value)}
          required
        />
        <br />

        <button type="submit">Book Test</button>
      </form>
    </div>
  );
}

export default TestBookingForm;
