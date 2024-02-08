import { numericObject } from "./mock.js";

let highestNumber = -Infinity;
for (const property in numericObject) {
    if(numericObject[property] > highestNumber) {
        highestNumber = numericObject[property]
    }
}

console.log(`The highest number is ${highestNumber}`);
