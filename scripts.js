// Simulated database using localStorage
let students = JSON.parse(localStorage.getItem('students')) || [];

// Password for viewing grades (hardcoded for demo; in production, use proper authentication)
const VIEW_PASSWORD = "Getahun";

// Enroll Student Form Submission
document.getElementById('enrollForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    const id = document.getElementById('studentId').value;
    const course = document.getElementById('course').value;

    // Check if student ID already exists
    if (students.some(student => student.id === id)) {
        alert('Student ID already exists!');
        return;
    }

    const student = { id, name, course, grade: null };
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
    alert('Student enrolled successfully!');
    this.reset();
});

// Add Grade Form Submission
document.getElementById('gradeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('gradeStudentId').value;
    const grade = parseInt(document.getElementById('grade').value);

    const student = students.find(s => s.id === id);
    if (!student) {
        alert('Student ID not found!');
        return;
    }

    student.grade = grade;
    localStorage.setItem('students', JSON.stringify(students));
    alert('Grade added successfully!');
    this.reset();
});

// View Grades Function
function viewGrades() {
    const password = document.getElementById('password').value;
    const tableBody = document.getElementById('gradeTableBody');

    if (password !== VIEW_PASSWORD) {
        alert('Incorrect password!');
        return;
    }

    tableBody.innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.grade !== null ? student.grade : 'Not Assigned'}</td>
        `;
        tableBody.appendChild(row);

    });
}