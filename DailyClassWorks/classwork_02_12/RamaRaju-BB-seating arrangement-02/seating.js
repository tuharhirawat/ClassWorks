function validateForm() {
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    const classInput = document.getElementById('class').value;
    const email = document.getElementById('email').value;
    const seatNo = document.getElementById('seatNo').value;
    const school = document.getElementById('school').value;
    const messageDiv = document.getElementById('message');
    const resultDiv = document.getElementById('result');
    const submittedDataList = document.getElementById('submittedData');

    // Clear previous messages
    messageDiv.textContent = "";
    resultDiv.textContent = "";

    // Validate Student ID (must be numeric)
    if (!/^\d+$/.test(studentId)) {
        messageDiv.textContent = "Student ID must be numeric.";
        return false;
    }

    // Validate Student Name (must not contain numbers)
    if (/[\d]/.test(studentName)) {
        messageDiv.textContent = "Student Name must not contain numbers.";
        return false;
    }

    // Validate Class (must not be empty)
    if (classInput.trim() === "") {
        messageDiv.textContent = "Class cannot be empty.";
        return false;
    }

    // Validate Email (basic pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        messageDiv.textContent = "Please enter a valid email address.";
        return false;
    }

    // Validate Seat No (must be a positive integer)
    if (seatNo <= 0) {
        messageDiv.textContent = "Seat No must be a positive number.";
        return false;
    }

    // Validate College/School (must not be empty)
    if (school.trim() === "") {
        messageDiv.textContent = "College/School cannot be empty.";
        return false;
    }

    // If all validations pass, display the submitted data
    const listItem = document.createElement('li');
    listItem.textContent = `ID: ${studentId}, Name: ${studentName}, Class: ${classInput}, Email: ${email}, Seat No: ${seatNo}, School: ${school}`;
    submittedDataList.appendChild(listItem);

    resultDiv.textContent = "Form submitted successfully!";
    return false; // Prevent form submission to refresh the page
}