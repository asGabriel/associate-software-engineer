import { students } from "./mock.js";

const studentsWithDate = students.map((student) => {
    const studentWithFormatedDate = {
        ...student,
        longDateFormat: convertInLegibleData(student.birthDate)
    }

    return studentWithFormatedDate;
})

function convertInLegibleData(birthDate) {
    // format: YYYY-MM-DD
    const birthDateSplit = birthDate.split("-");
    const date = new Intl.DateTimeFormat("pt-br", { dateStyle: "medium" }).format(new Date(birthDateSplit[0], birthDateSplit[1], birthDateSplit[2]));

    return date;
}

console.log("studentsWithDate", studentsWithDate);
