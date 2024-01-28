import { students } from "./mock.js";

const today = new Date();

const studantsWithDaysUntilBirthDate = students.map((student) => {
  const newStudent = {
    ...student,
    daysUntilBirthDate: daysUntilBirthDate(student.birthDate),
  };

  return newStudent;
});

function daysUntilBirthDate(birthDate) {
  const splitBirthDate = birthDate.split("-");
  const birthDateWithCurrentYear = new Date(
    today.getFullYear(),
    splitBirthDate[1],
    splitBirthDate[2]
  );

  const days = Math.round((today - birthDateWithCurrentYear) / 86400000);
  if (days < 0) {
    return -days;
  }

  return days;
}

console.log(studantsWithDaysUntilBirthDate);
