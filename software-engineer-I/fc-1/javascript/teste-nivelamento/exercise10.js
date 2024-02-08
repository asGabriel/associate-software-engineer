import { students } from "./mock.js";
import { daysUntilDate } from "./utils/date.js";

const studantsWithDaysUntilBirthDate = students.map((student) => {
  return {
    ...student,
    daysUntilBirthDate: daysUntilDate(student.birthDate),
  };
});

console.log(studantsWithDaysUntilBirthDate);
