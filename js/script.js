// DOM ELEMENTS
const studentForm = document.getElementById('studentForm');
const studentsContainer = document.querySelector('.students');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

const students = [
  {
    name: 'Diogo',
    age: 40,
    roll: 36,
  },
  {
    name: 'Carla',
    age: 40,
    roll: 36,
  },
];

const addStudent = (name, age, roll) => {};

const createStudentElement = ({ name, age, roll }) => {
  const studentDiv = document.createElement('div');
  const studentName = document.createElement('h2');
  const studentAge = document.createElement('p');
  const studentRoll = document.createElement('p');

  studentName.innerText = 'Student name: ' + name;
  studentAge.innerText = 'Student age: ' + age;
  studentRoll.innerText = 'Student roll: ' + roll;

  studentDiv.append(studentName, studentAge, studentRoll);
  studentsContainer.appendChild(studentDiv);
};

students.forEach(createStudentElement);
