// DOM ELEMENTS
const studentForm = document.getElementById('studentForm');
const studentsContainer = document.querySelector('.students');

// The ||(or) é usado no caso de não ter nada no localStorage, aí então é criado uma array vazia
const students = JSON.parse(localStorage.getItem('students')) || [];

const addStudent = (name, age, roll) => {
  students.push({
    name,
    age,
    roll,
  });

  localStorage.setItem('students', JSON.stringify(students));

  return { name, age, roll };
};

const createStudentElement = ({ name, age, roll }) => {
  const studentDiv = document.createElement('div');
  const studentName = document.createElement('h2');
  const studentAge = document.createElement('p');
  const studentRoll = document.createElement('p');

  studentName.innerText = 'Student name: ' + name;
  studentAge.innerText = 'Student age: ' + age;
  studentRoll.innerText = 'Student rolll: ' + roll;

  studentDiv.append(studentName, studentAge, studentRoll);
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? 'none' : 'flex';
};

studentsContainer.style.display = students.length === 0 ? 'none' : 'flex';

// Passando a array de objetos 'student' e para cada item da array chamando a função createStudentElement
students.forEach(createStudentElement);

studentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = studentForm['name'];
  const ageInput = studentForm['age'];
  const rollInput = studentForm['roll'];

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = '';
  ageInput.value = '';
  rollInput.value = '';
});
