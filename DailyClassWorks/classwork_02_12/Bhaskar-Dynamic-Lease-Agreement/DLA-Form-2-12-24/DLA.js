function addClause() {
    const clauseContainer = document.getElementById('clause-list');
  
    const newClause = document.createElement('div');
    newClause.classList.add('clause');
    
    newClause.innerHTML = `
      <textarea placeholder="Enter lease clause..."></textarea>
      <button class="remove-clause" onclick="removeClause(this)">Remove Clause</button>
    `;
    
    clauseContainer.appendChild(newClause);
  }

  function removeClause(button) {
    const clause = button.parentElement;
    clause.remove();
  }
  
  function calculateTotal() {
  
    const monthlyRent = parseInt(document.getElementById('Monthly-Rent').value) || 0;
    const leaseDuration = parseInt(document.getElementById('Lease-Time').value) || 0;
    const securityDeposit = parseFloat(document.getElementById('Security-Deposit').value) || 0;
    const lateFeePercentage = parseFloat(document.getElementById('Late-Fee charge').value) || 0;



    if (Monthly-Rent < 1 || Monthly-Rent > 300000) {
        alert('Monthly-Rent must be between 1 and 48 months');
        return;
      }

    if (leaseDuration < 1 || leaseDuration > 48) {
        alert('Lease duration must be between 1 and 48 months');
        return;
      }
    
      if (securityDeposit < 0 || securityDeposit > 200000) {
        alert('Security deposit must be between $0 and $200,000');
        return;
      }
    
      if (lateFeePercentage < 0 || lateFeePercentage > 10) {
        alert('Late fee percentage must be between 0% and 10%');
        return;
      }
  
    const totalRent = monthlyRent * leaseDuration;
    const lateFee = (totalRent * lateFeePercentage) / 100;
    const totalAmount = totalRent + securityDeposit + lateFee;
  
    document.getElementById('Total-Payment').innerText = totalAmount.toFixed(2);
  }
  
  function submitForm() {

    const clauses = [];
    const clauseElements = document.querySelectorAll('#clause-list textarea');
    clauseElements.forEach((element) => {
      clauses.push(element.value);
    });
  

    const leaseData = {
      clauses,
      monthlyRent: document.getElementById('Monthly-Rent').value,
      leaseDuration: document.getElementById('Lease-Time').value,
      securityDeposit: document.getElementById('security-deposit').value,
      lateFee: document.getElementById('Late-Fee charge').value,
      totalAmount: document.getElementById('Total-Payment').innerText,
    };
  
    const summary = `
    <h3>Lease Summary</h3>
    <p><strong>Monthly Rent:</strong> $${monthlyRent}</p>
    <p><strong>Lease Duration:</strong> ${leaseTime} months</p>
    <p><strong>Security Deposit:</strong> $${securityDeposit}</p>
    <p><strong>Late Fee Percentage:</strong> ${lateFee}%</p>
    <p><strong>Total Payment:</strong> $${document.getElementById('Total-Payment').textContent}</p>
    <h4>Lease Clauses:</h4>
    <ul>
        ${clauses.map(clause => `<li>${clause}</li>`).join('')}
    </ul>
`;

document.getElementById('lease-summary').innerHTML = summary;
}