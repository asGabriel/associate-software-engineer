const pessoas = [...Array(50)].map((_, i) => ({
  nome: `Pessoa${i + 1}`,
  dataNascimento: new Date(1950 + i, 1, 1),
}));

const parameterDate = new Date("1990-01-01");

const peopleOlderThenDate = pessoas
  .filter((person) => person.dataNascimento < parameterDate)
  .sort((currentAge, age) => currentAge - age)
  .map((person) => `Name ${person.nome} and BirthDate ${person.dataNascimento}`)

console.log(peopleOlderThenDate);
