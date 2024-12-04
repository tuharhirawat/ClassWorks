import React, { useState } from 'react';
import AttendanceForm from './AttendanceForm'; // Assuming you have the AttendanceForm component
import AttendanceRecord from './AttendanceRecord'; // Assuming you have the AttendanceRecord component

function Main1() {
  const [students, setStudents] = useState([
    { id: 1, name: 'SRAVYA', present: false },
    { id: 2, name: 'PRIYA', present: false },
    { id: 3, name: 'RAM', present: false },
    { id: 4, name: 'TUSHAR', present: false }
  ]);

  const [attendanceHistory, setAttendanceHistory] = useState([]);

  const markAttendance = (studentId, present) => {
    const updatedStudents = students.map((student) =>
      student.id === studentId ? { ...student, present } : student
    );
    setStudents(updatedStudents);
  };

  const saveAttendance = () => {
    setAttendanceHistory([...attendanceHistory, students]);
    alert('Attendance saved!');
  };

  return (
    <>
      <h1>Student Attendance Tracker</h1>
      <AttendanceForm markAttendance={markAttendance} students={students} />
      <button onClick={saveAttendance}>Save Attendance</button>
      <AttendanceRecord attendanceHistory={attendanceHistory} />
    </>
  );
}

export default Main1;
