import { students } from "./mock.js";

const studantsWithDaysUntilBirthDate = students.map((student) => {
  const newStudent = {
    ...student,
    daysUntilBirthDate: daysUntilBirthDate(student.birthDate),
  };

  return newStudent;
});

function daysUntilBirthDate(birthDate) {
  const birthDateWithCurrentYear = new Date(birthDate).setFullYear(new Date().getFullYear())

  const days = Math.round((new Date() - birthDateWithCurrentYear) / 86400000);
  if (days < 0) {
    return -days;
  }

  return days;
}

console.log(studantsWithDaysUntilBirthDate);
