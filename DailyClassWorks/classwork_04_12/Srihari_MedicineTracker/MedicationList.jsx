import React from 'react';
import DoseItem from './DoseItem';

function MedicationList({ medications, markDoseAsTaken, markDoseAsMissed }) {
  return (
    <div>
      <h2>Medication Schedule</h2>
      {medications.map((medication, medicationIndex) => (
        <div key={medicationIndex}>
          <h3>{medication.name} ({medication.dosage})</h3>
          {medication.doses.map((dose, doseIndex) => (
            <DoseItem 
              key={doseIndex}
              dose={dose}
              markTaken={() => markDoseAsTaken(medicationIndex, doseIndex)}
              markMissed={() => markDoseAsMissed(medicationIndex, doseIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default MedicationList;
