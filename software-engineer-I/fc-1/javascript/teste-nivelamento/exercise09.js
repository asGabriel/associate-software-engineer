import { students } from "./mock.js";
import { convertInLegibleData } from "./utils/date.js";

const studentsWithDate = students.map((student) => {
  return {
    ...student,
    longDateFormat: convertInLegibleData(student.birthDate),
  };
});



console.log("studentsWithDate", studentsWithDate);
