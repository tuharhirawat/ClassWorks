import React from 'react';

const StudentList = ({ students, markAttendance }) => {
  const handleAttendanceChange = (e, studentId) => {
    markAttendance(studentId, e.target.checked);
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      {students.map((student) => (
        <div key={student.id}>
          <label>
            <input
              type="checkbox"
              checked={student.present}
              onChange={(e) => handleAttendanceChange(e, student.id)}
            />
            {student.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
