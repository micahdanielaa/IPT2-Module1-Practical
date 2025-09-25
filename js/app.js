// add student
document.addEventListener('DOMContentLoaded', function () {
    const addStudentButton = document.getElementById('addStudentButton');
    const tableContent = document.getElementById('table-content');

    function addStudent() {
        const idNumber = document.getElementById('idNumber').value.trim();
        const firstName = document.getElementById('firstName').value.trim();
        const middleName = document.getElementById('middleName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();

        if (idNumber && firstName && middleName && lastName) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${idNumber}</td>
                <td>${firstName}</td>
                <td>${middleName}</td>
                <td>${lastName}</td>
            `;
            tableContent.appendChild(newRow);

            // Clear form fields
            document.getElementById('studentForm').reset();
        } else {
            alert('Please fill out all fields.');
        }
    }

    addStudentButton.addEventListener('click', addStudent);
});

