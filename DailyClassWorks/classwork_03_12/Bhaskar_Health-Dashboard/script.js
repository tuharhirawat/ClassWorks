document.addEventListener('DOMContentLoaded', () => {
    const recordsContainer = document.getElementById('records');
    const typeFilter = document.getElementById('typeFilter');
    
    const medicalRecords = [
      { id: 1, type: 'Prescription', date: '2024-11-25', details: 'Paracetamol 500mg, 30 tablets' },
      { id: 2, type: 'Appointment', date: '2024-11-20', details: 'General Checkup with Dr. Ramesh' },
      { id: 3, type: 'Prescription', date: '2024-10-21', details: 'Dart 250mg, 20 capsules' },
      { id: 4, type: 'Lab Test', date: '2024-11-06', details: 'Blood test results: normal' },
    ];
  
    typeFilter.addEventListener('change', (e) => {
      const selectedType = e.target.value;
  
     
      const filteredRecords = medicalRecords.filter(record => {
        return selectedType ? record.type === selectedType : true; 
      });
  
      renderRecords(filteredRecords);
    });
  
    
    function renderRecords(records) {
      recordsContainer.innerHTML = '';  
  
      const recordHTML = records.map(record => {
        return `
          <div class="record-card">
            <h3>${record.type}</h3>
            <p><strong>Date:</strong> ${record.date}</p>
            <p><strong>Details:</strong> ${record.details}</p>
          </div>
        `;
      }).join(''); 
  
      recordsContainer.innerHTML = recordHTML;  
    }
  
    
    renderRecords(medicalRecords);
  });
