import React from 'react';
import StudentList from './StudentList';

const AttendanceForm = ({ students, markAttendance }) => {
  return (
    <div>
      <StudentList students={students} markAttendance={markAttendance} />
    </div>
  );
};

export default AttendanceForm;
