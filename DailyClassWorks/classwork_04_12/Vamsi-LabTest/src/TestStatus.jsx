import React from 'react';

function TestStatus({ testBookings, DeleteBooking }) {
  const handleDelete = (id) => {
    DeleteBooking(id);
  };

  return (
    <div>
      <h2>Test Status</h2>
      <ul>
        {testBookings.length === 0 ? (
          <li>No test bookings yet.</li>
        ) : (
          testBookings.map((booking) => (
            <li key={booking.id}>
              <strong>Name:</strong> {booking.name} |
              <strong> Test Type:</strong> {booking.testType} |
              <strong> Test Date:</strong> {booking.testDate} |
              <strong> Status:</strong> {booking.status}
              {booking.status === 'Completed' && (
                <div>
                  <strong> Test Results:</strong> Normal
                </div>
              )}
              
              <button onClick={() => handleDelete(booking.id)}>Delete Booking</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TestStatus;
