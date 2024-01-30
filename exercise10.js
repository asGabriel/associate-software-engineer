import { students } from "./mock.js";

const studantsWithDaysUntilBirthDate = students.map((student) => {
  return {
    ...student,
    daysUntilBirthDate: daysUntilBirthDate(student.birthDate),
  };
});

function daysUntilBirthDate(birthDate) {
  const birthDateWithCurrentYear = new Date(birthDate).setFullYear(
    new Date().getFullYear()
  );

  const second = 1000;
  const minute = 60;
  const hour = 60;
  const day = 24;
  const year = 365;

  const days =
    Math.round((new Date() - new Date(birthDateWithCurrentYear)) / (second * minute * hour * day));

  if (days < 0) {
    return -days;
  }

  return days;
}

console.log(studantsWithDaysUntilBirthDate);
