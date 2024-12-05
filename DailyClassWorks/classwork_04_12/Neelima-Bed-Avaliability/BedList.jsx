import React from 'react';
import BedItem from './BedItem';  // Import BedItem component

const BedList = ({ beds, onStatusChange }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {beds.length === 0 ? (
        <p>No beds available with this status.</p>
      ) : (
        beds.map((bed) => (
          <BedItem key={bed.id} bed={bed} onStatusChange={onStatusChange} />
        ))
      )}
    </div>
  );
};

export default BedList;
