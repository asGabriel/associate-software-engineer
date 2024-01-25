import { randomStrings } from "./mock.js";

let allStrings = "";

for (let word of randomStrings) {
    allStrings += word
}

console.log(allStrings);
