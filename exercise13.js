import { events, people } from "./mock.js";

const personEventCloseToBirthDate = people.map((person) => {
  const filteredEvent = events.filter(
    (event) => event.data > person.dataNascimento
  );

  const event = filteredEvent.reduce((previous, actual) => {
    return previous.data < actual.data ? previous : actual;
  });

  return `person: ${person.nome} - ${person.dataNascimento}, event: ${event.nome} - ${event.data} `;
});

console.log(personEventCloseToBirthDate);
