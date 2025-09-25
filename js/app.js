function addSubject() {
    const subjectCode = document.getElementById('subjectCode').value.trim();
    const subjectName = document.getElementById('subjectName').value.trim();
    const units = document.getElementById('units').value.trim();

    if (subjectCode && subjectName && units) {
        const tableContent = document.getElementById('table-content');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${subjectCode}</td>
            <td>${subjectName}</td>
            <td>${units}</td>
        `;

        tableContent.appendChild(newRow);

        // Clear input fields
        document.getElementById('subjectCode').value = '';
        document.getElementById('subjectName').value = '';
        document.getElementById('units').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}

document.getElementById('addSubject').addEventListener('click', addSubject);