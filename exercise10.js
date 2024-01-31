import { students } from "./mock.js";
import { daysUntilBirthDate } from "./utils/date.js";

const studantsWithDaysUntilBirthDate = students.map((student) => {
  return {
    ...student,
    daysUntilBirthDate: daysUntilBirthDate(student.birthDate),
  };
});

console.log(studantsWithDaysUntilBirthDate);
