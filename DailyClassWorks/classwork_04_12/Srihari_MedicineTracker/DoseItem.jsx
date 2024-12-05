import React from 'react';

function DoseItem({ dose, markTaken, markMissed }) {
  return (
    <div>
      <p>{dose.time} - Status: <strong>{dose.status}</strong></p>
      {dose.status === 'Upcoming' && (
        <div>
          <button onClick={markTaken}>Mark as Taken</button>
          <button onClick={markMissed}>Mark as Missed</button>
        </div>
      )}
    </div>
  );
}

export default DoseItem;
