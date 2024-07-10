let courseCount = 1;
let semesterCount = 1;

document.getElementById('addCourse').addEventListener('click', function() {
    courseCount++;
    const courseContainer = document.getElementById('course-container');
    
    const newCourseGroup = document.createElement('div');
    newCourseGroup.classList.add('course-group');
    newCourseGroup.innerHTML = `
        <div class="form-group">
            <label for="course${courseCount}">Subject ${courseCount} Grade:</label>
            <select id="course${courseCount}" required>
                <option value="10">O</option>
                <option value="9">A+</option>
                <option value="8">A</option>
                <option value="7">B+</option>
                <option value="6">B</option>
                <option value="5">C</option>
                <option value="0">U</option>
            </select>
        </div>
        <div class="form-group">
            <label for="credit${courseCount}">Subject ${courseCount} Credit Points:</label>
            <input type="number" id="credit${courseCount}" min="1" step="1" required>
        </div>
    `;
    courseContainer.appendChild(newCourseGroup);
});

document.getElementById('removeCourse').addEventListener('click', function() {
    if (courseCount > 1) {
        const courseContainer = document.getElementById('course-container');
        courseContainer.removeChild(courseContainer.lastElementChild);
        courseCount--;
    }
});

document.getElementById('addSemester').addEventListener('click', function() {
    semesterCount++;
    const semesterContainer = document.getElementById('semester-container');
    
    const newSemesterGroup = document.createElement('div');
    newSemesterGroup.classList.add('form-group');
    newSemesterGroup.innerHTML = `
        <label for="semester${semesterCount}">Semester ${semesterCount} GPA:</label>
        <input type="number" id="semester${semesterCount}" min="0" max="10" step="0.01" required>
    `;
    semesterContainer.appendChild(newSemesterGroup);
});

document.getElementById('removeSemester').addEventListener('click', function() {
    if (semesterCount > 1) {
        const semesterContainer = document.getElementById('semester-container');
        semesterContainer.removeChild(semesterContainer.lastElementChild);
        semesterCount--;
    }
});

document.getElementById('gpaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let totalPoints = 0;
    let totalCredits = 0;
    
    for (let i = 1; i <= courseCount; i++) {
        const grade = parseFloat(document.getElementById(`course${i}`).value);
        const credit = parseInt(document.getElementById(`credit${i}`).value);
        
        totalPoints += grade * credit;
        totalCredits += credit;
    }
    
    const gpa = totalPoints / totalCredits;
    document.getElementById('gpaResult').innerText = `Your GPA is: ${gpa.toFixed(2)}`;
});

document.getElementById('cgpaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let totalGPA = 0;
    
    for (let i = 1; i <= semesterCount; i++) {
        const gpa = parseFloat(document.getElementById(`semester${i}`).value);
        totalGPA += gpa;
    }
    
    const cgpa = totalGPA / semesterCount;
    document.getElementById('cgpaResult').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
});
