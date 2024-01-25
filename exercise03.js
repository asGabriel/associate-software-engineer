import { numericObject } from "./mock.js";

let highestNumber = 0;
for (const property in numericObject) {
    highestNumber = getGreaterNumber(highestNumber, numericObject[property])
}

function getGreaterNumber(number, numberToCompare) {
    return numberToCompare > number ? numberToCompare : number
}

console.log(`The highest number is ${highestNumber}`);
