import React from 'react';

const AttendanceRecord = ({ attendanceHistory }) => {
  return (
    <div>
      <h2>Attendance History</h2>
      {attendanceHistory.length === 0 ? (
        <p>No attendance records available.</p>
      ) : (
        attendanceHistory.map((record, index) => (
          <div key={index}>
            <h3>Record {index + 1}</h3>
            <ul>
              {record.map((student) => (
                <li key={student.id}>
                  {student.name}: {student.present ? 'Present' : 'Absent'}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default AttendanceRecord;
