import { numericObject } from "./mock.js";

var highestNumber = 0;
for (let property in numericObject) {
    highestNumber = compare(highestNumber, numericObject[property])
}

function compare(number, numberToCompare) {
    if (numberToCompare > number) {
        return numberToCompare;
    } else {
        return number;
    }
}

console.log(`The highest number is ${highestNumber}`);
