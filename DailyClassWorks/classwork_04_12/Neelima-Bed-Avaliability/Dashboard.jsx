import React, { useState } from 'react';
import BedList from './BedList';      // Import the BedList component
import Filter from './Filter';        // Import the Filter component

const Dashboard = () => {
  const [beds, setBeds] = useState([
    { id: 1, bedNumber: 'A1', status: 'Available' },
    { id: 2, bedNumber: 'A2', status: 'Occupied' },
    { id: 3, bedNumber: 'A3', status: 'Reserved' },
    { id: 4, bedNumber: 'B1', status: 'Available' },
    { id: 5, bedNumber: 'B2', status: 'Cleaning' },
  ]);
  const [filterStatus, setFilterStatus] = useState('All');

  // Handle bed status change
  const handleStatusChange = (bedId) => {
    setBeds((prevBeds) => {
      return prevBeds.map((bed) => {
        if (bed.id === bedId) {
          const statuses = ['Available', 'Occupied', 'Reserved', 'Cleaning', 'Maintenance'];
          const currentStatusIndex = statuses.indexOf(bed.status);
          const nextStatusIndex = (currentStatusIndex + 1) % statuses.length;
          return { ...bed, status: statuses[nextStatusIndex] };
        }
        return bed;
      });
    });
  };

  const filteredBeds = filterStatus === 'All' ? beds : beds.filter(bed => bed.status === filterStatus);

  return (
    <div style={{ padding: '20px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Bed Availability Dashboard</h1>
      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <BedList beds={filteredBeds} onStatusChange={handleStatusChange} />
    </div>
  );
};

export default Dashboard;
