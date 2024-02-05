import { studentsError as students } from "./mock.js";
import { convertInLegibleData } from "./utils/date.js";

const errorLog = [];

const studentsFullDate = students.map((student) => {
  console.log(student.birthDate);
  const fullDateName = convertInLegibleData(student.birthDate);
  if (fullDateName.error) {
    errorLog.push({ error: fullDateName.error, studentName: student.name });
  }
  return {
    ...student,
    fullDateName: fullDateName,
  };
});

console.log(studentsFullDate);

console.log("Error Log", errorLog);
