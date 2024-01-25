import { students } from "./mock.js";

const date = new Date();

const teste = students.map((student) => {
    const studentWithFormatedDate = {
        name: student.name,
        age: convertInLegibleData(date, student.age)
    }

    return studentWithFormatedDate;
})

console.log("teste", teste)


function convertInLegibleData(date, ageYear) {
    const day = date.getDay();
    const month = getMonthName(date.getMonth());
    const year = date.getFullYear() - ageYear;

    return `${day} de ${month} de ${year}`
}

function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 0:
            return "Janeiro"
        case 1:
            return "Fevereiro"
        case 2:
            return "Março"
        case 3:
            return "Abril"
        case 4:
            return "Maio"
        case 5:
            return "Junho"
        case 6:
            return "Julho"
        case 7:
            return "Agosto"
        case 8:
            return "Setembro"
        case 9:
            return "Outubro"
        case 10:
            return "Novembro"
        case 11:
            return "Dezembro"
        default:
            return "Mês inválido."
    }
}

console.log(convertInLegibleData(date));
