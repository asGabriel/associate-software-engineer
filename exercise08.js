// calcular a média de idade dos estudantes e listar os que estão acima da média
import { students } from "./mock.js";

let averageStudentAge = [];

students.map((student) => averageStudentAge.push(student.age));

averageStudentAge = averageStudentAge.reduce(
    (total, value) => {
        return total + value
    }
);

const listOfStudentUnderAverageAge = students.filter(
    (person) => person.age > (averageStudentAge/students.length)
);

console.log(`Average age: ${averageStudentAge/students.length}`);

console.log(listOfStudentUnderAverageAge);
