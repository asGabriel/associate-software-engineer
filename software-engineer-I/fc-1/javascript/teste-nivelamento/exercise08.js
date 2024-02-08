import { students } from "./mock.js";

const sumStudentsAge = students.reduce((sum, student) => {
  return sum + student.age;
}, 0);

const averageStudentsAge = sumStudentsAge / students.length;

const studentsUnderAverageAge = students.filter(
  (student) => student.age > averageStudentsAge
);

console.log(`Average students age: ${averageStudentsAge}`);

console.log("Students under average age:", studentsUnderAverageAge);
