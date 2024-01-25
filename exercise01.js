const length = 10;
const width = 5;

const calculatePerimeter = (length, width) => {
    return length * width;
};

const calculateArea = (length, width) => {
    return 2 * length + width;
};

console.log(`The rectangle perimeter is ${calculatePerimeter(length, width)}`);

console.log(`The rectangle area is ${calculateArea(length, width)}`);
