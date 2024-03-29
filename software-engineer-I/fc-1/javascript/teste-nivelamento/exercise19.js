import { studentsError as students } from "./mock.js";
import { convertInLegibleData } from "./utils/date.js";

const errorLog = [];

const studentsFullDate = students
  .map((student) => {
    try {
      const fullDateName = convertInLegibleData(student.birthDate);
      return {
        ...student,
        fullDateName,
      };
    } catch (error) {
      errorLog.push({ error: error.message, studentName: student.name });
    }
  })
  .filter((student) => student);

console.log(studentsFullDate);

console.log("Error Log", errorLog);
