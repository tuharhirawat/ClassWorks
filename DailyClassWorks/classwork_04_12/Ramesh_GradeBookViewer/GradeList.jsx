import React from 'react';
import Grade from './Grade';

const GradeList = ({ grades }) => {
  if (!grades.length) {
    return <p>No grades available for the selected filters.</p>;
  }

  return (
    <div>
      {grades.map((grade) => (
        <Grade key={grade.id} grade={grade} />
      ))}
    </div>
  );
};

export default GradeList;
