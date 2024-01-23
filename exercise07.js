import { students } from "./mock.js";

const filteredStudents = students.filter(
    (student) => student.name.length > 3 && student.age > 20
);

console.log(filteredStudents);
