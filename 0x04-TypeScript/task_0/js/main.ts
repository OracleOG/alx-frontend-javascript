interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Emma',
    lastName: 'John',
    age: 23,
    location: 'Kaduna'
};

const student2: Student = {
    firstName: 'kelvin',
    lastName: 'Francis',
    age: 25,
    location: 'Abuja'
};

const studentsList: Array<Student> = [student1, student2];
const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
});

document.body.appendChild(table);