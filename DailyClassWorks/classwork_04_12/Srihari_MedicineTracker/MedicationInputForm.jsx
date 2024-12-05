// import React, { useState } from 'react';
// import moment from 'moment';
// import { toast } from 'react-toastify';

// function MedicationInputForm({ addMedication }) {
//   const [name, setName] = useState('');
//   const [dosage, setDosage] = useState('');
//   const [frequency, setFrequency] = useState('');
//   const [time, setTime] = useState('');
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !dosage || !frequency || !time) {
//       toast.error("Please fill all fields!");
//       return;
//     }

//     const medication = {
//       name,
//       dosage,
//       frequency,
//       doses: generateDoses(time, frequency),
//     };

//     addMedication(medication);
//     setName('');
//     setDosage('');
//     setFrequency('');
//     setTime('');
//     toast.success("Medication added successfully!");
//   };

//   const generateDoses = (time, frequency) => {
//     const doses = [];
//     const startTime = moment(time, 'HH:mm');
//     for (let i = 0; i < 5; i++) { // Assume 5 doses as an example
//       doses.push({
//         time: startTime.add(frequency === '8 hours' ? 8 : 12, 'hours').format('HH:mm'),
//         status: 'Upcoming',
//       });
//     }
//     return doses;
//   };

//   return (
//     <div>
//       <h2>Add Medication</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           placeholder="Medication Name" 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//         />
//         <input 
//           type="text" 
//           placeholder="Dosage" 
//           value={dosage} 
//           onChange={(e) => setDosage(e.target.value)} 
//         />
//         <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
//           <option value="">Frequency</option>
//           <option value="8 hours">8 hours</option>
//           <option value="12 hours">12 hours</option>
//         </select>
//         <input 
//           type="time" 
//           value={time} 
//           onChange={(e) => setTime(e.target.value)} 
//         />
//         <button type="submit">Add Medication</button>
//       </form>
//     </div>
//   );
// }

// export default MedicationInputForm;








import React, { useState } from 'react';

function MedicationInputForm({ addMedication }) {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !dosage || !frequency || !time) {
      alert('Please fill all fields');
      return;
    }

    const medication = {
      name,
      dosage,
      frequency,
      doses: generateDoses(time, frequency),
    };

    addMedication(medication);
    setName('');
    setDosage('');
    setFrequency('');
    setTime('');
  };

  // Generate doses for the medication
  const generateDoses = (time, frequency) => {
    const doses = [];
    const startTime = new Date(`1970-01-01T${time}:00`);
    for (let i = 0; i < 5; i++) { // Add 5 doses as an example
      doses.push({
        time: new Date(startTime.getTime() + i * (frequency === '8 hours' ? 8 : 12) * 60 * 60 * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        status: 'Upcoming',
      });
    }
    return doses;
  };

  return (
    <div>
      <h2>Add Medication</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Medication Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Dosage" 
          value={dosage} 
          onChange={(e) => setDosage(e.target.value)} 
        />
        <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="">Frequency</option>
          <option value="8 hours">8 hours</option>
          <option value="12 hours">12 hours</option>
        </select>
        <input 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
        />
        <button type="submit">Add Medication</button>
      </form>
    </div>
  );
}

export default MedicationInputForm;
