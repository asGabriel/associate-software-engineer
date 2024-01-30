import { students } from "./mock.js";

const studentsWithDate = students.map((student) => {
  return {
    ...student,
    longDateFormat: convertInLegibleData(student.birthDate),
  };
});

function convertInLegibleData(birthDate) {
  // format: YYYY-MM-DD
  const birthDateObj = new Date(birthDate);
  const date = new Intl.DateTimeFormat("pt-br", { dateStyle: "medium" }).format(
    birthDateObj
  );

  return date;
}

console.log("studentsWithDate", studentsWithDate);
