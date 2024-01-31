import { studentsError as students } from "./mock.js";
import { convertInLegibleData } from "./utils/date.js";

const errorLog = [];

const studentsFullDate = students.map((student) => {
  try {
    const propFullDate = {
      ...student,
      fullDateName: convertInLegibleData(student.birthDate),
    };

    return propFullDate;
  } catch (error) {
    errorLog.push({ error: error.message, studentName: student.name });
    return {...student, fullDateName: "Error to convert"};
  }
});

console.log(studentsFullDate);

console.log("Error Log", errorLog);
