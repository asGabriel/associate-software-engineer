import { people } from "./mock.js";

const parameterDate = new Date("1990-01-01");

const peopleOlderThenDate = people
  .filter((person) => person.dataNascimento < parameterDate)
  .sort((currentAge, age) => currentAge - age)
  .map((person) => `Name ${person.nome} and BirthDate ${person.dataNascimento}`)

console.log(peopleOlderThenDate);
