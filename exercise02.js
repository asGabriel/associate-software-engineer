import { randomStrings } from "./mock.js";

let allStrings = "";

for (let word of randomStrings) {
    allStrings = allStrings.concat(word);
}

console.log(allStrings);
