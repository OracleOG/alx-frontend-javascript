export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}


function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
        .filter(student => student.location === city)
        .map(student => {
            // Find matching grade from newGrades
            const newGrade = newGrades.find(grade => grade.studentId === student.id);
            // Create a new object to avoid mutating the original
            student.grade = newGrade ? newGrade.grade : 'N/A';
            return student;
        });
}

import getListStudents from "./0-get_list_students"
console.log(getListStudents())
console.log(updateStudentGradeByCity(getListStudents(), "San Francisco",  [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));