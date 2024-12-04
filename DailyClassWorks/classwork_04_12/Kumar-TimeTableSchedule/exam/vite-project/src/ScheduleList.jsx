import React from 'react';
import ClassItem from './ClassItem';

function ScheduleList({ schedule, removeClass }) {
  return (
    <div>
      <h2>Class Schedule</h2>
      {schedule.length === 0 ? (
        <p>No classes scheduled yet.</p>
      ) : (
        <ul>
          {schedule.map((classItem) => (
            <ClassItem
              key={classItem.id}
              classItem={classItem}
              removeClass={removeClass}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ScheduleList;
