import { numericObject } from "./mock.js";

let highestNumber = 0;
for (const property in numericObject) {
    highestNumber = highestNumber > numericObject[property] ? highestNumber : numericObject[property]
}

console.log(`The highest number is ${highestNumber}`);
