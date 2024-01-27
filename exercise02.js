import { randomStrings } from "./mock.js";

let allStrings = "";

for (const word of randomStrings) {
    allStrings += word
}

console.log(allStrings);
