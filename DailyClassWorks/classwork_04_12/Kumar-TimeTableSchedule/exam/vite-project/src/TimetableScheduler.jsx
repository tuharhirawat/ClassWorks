import React, { useState } from 'react';
import AddClassForm from './AddClassForm';
import ScheduleList from './ScheduleList';

function TimetableScheduler() {
  const [schedule, setSchedule] = useState([]);

  
  const addClass = (newClass) => {
    setSchedule([...schedule, newClass]);
  };

  
  const removeClass = (id) => {
    setSchedule(schedule.filter((classItem) => classItem.id !== id));
  };

  return (
    <div>
      <h1>Timetable Scheduler</h1>
      <AddClassForm addClass={addClass} />
      <ScheduleList schedule={schedule} removeClass={removeClass} />
    </div>
  );
}

export default TimetableScheduler;
