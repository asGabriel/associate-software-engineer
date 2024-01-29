import { sales } from "./mock.js";

let ageGroups = {
  "15-": [],
  "16-18": [],
  "19-21": [],
  "22-24": [],
  "25+": [],
};

function rangeByAge(age) {
  if (age <= 15) {
    return "15-";
  } else if (age >= 16 && age <= 18) {
    return "16-18";
  } else if (age >= 18 && age <= 21) {
    return "19-21";
  } else if (age >= 22 && age <= 24) {
    return "22-24";
  } else if (age >= 25) {
    return "25+";
  } else {
    ("Invalid age");
  }
}

function convertMilissecondsToDays(milissecondsDate) {
  const second = 1000;
  const minute = 60;
  const hour = 60;
  const day = 24;
  const year = 365;

  const days =
    new Date(milissecondsDate) / (second * minute * hour * day) / year;

  return days;
}

function groupByAgeRange(students, purchases) {
  students.forEach((student) => {
    const studentWithAge = {
      ...student,
      age: Math.round(
        convertMilissecondsToDays(new Date() - new Date(student.dataNascimento))
      ),
    };

    const operations = purchases.filter(
      (item) => item.idEstudante === student.id
    );

    const ageRange = rangeByAge(studentWithAge.age);

    ageGroups[ageRange].push(...operations);
  });

  return ageGroups;
}

console.log(groupByAgeRange(sales.estudantes, sales.compras));
