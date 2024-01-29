import { studentsError as students } from "./mock.js";

const errorLog = [];

function convertInLegibleData(birthDate) {
  // format: YYYY-MM-DD
  const birthDateSplit = birthDate.split("-");
  const date = new Intl.DateTimeFormat("pt-br", { dateStyle: "medium" }).format(
    new Date(birthDateSplit[0], birthDateSplit[1], birthDateSplit[2])
  );

  return date;
}

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
