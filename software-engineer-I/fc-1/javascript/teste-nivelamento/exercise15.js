const numbers = new Set([1, 2, 3, 4, 5]);

const newArray = []
numbers.forEach(
    (number) => {
        newArray.push(number)
    }
);

console.log(newArray);
