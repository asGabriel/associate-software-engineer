import { words } from "./mock.js";

const wordsFrequency = new Map();

words.forEach((word) => {
  wordsFrequency.has(word)
    ? wordsFrequency.set(word, wordsFrequency.get(word) + 1)
    : wordsFrequency.set(word, 1);
});

console.log(wordsFrequency);
