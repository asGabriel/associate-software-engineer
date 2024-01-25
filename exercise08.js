import { students } from "./mock.js";

const averageStudentsAge = (students.reduce(
    (sum, obj) => {
        return sum + obj.age;
    }, 0
))/students.length;

const studentsUnderAverageAge = students.filter(
    (student) => student.age > averageStudentsAge
);

console.log(`Average students age: ${averageStudentsAge}`);

console.log("Students under average age:", studentsUnderAverageAge);
