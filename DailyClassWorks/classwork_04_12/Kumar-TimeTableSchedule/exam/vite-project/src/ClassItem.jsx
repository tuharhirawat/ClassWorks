import React from 'react';

function ClassItem({ classItem, removeClass }) {
  return (
    <li>
      <h4>{classItem.name}</h4>
      <p>Time: {classItem.time}</p>
      <p>Location: {classItem.location}</p>
      <button onClick={() => removeClass(classItem.id)}>Remove</button>
    </li>
  );
}

export default ClassItem;
