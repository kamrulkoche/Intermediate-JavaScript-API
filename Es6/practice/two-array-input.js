const arrow = (array1, array2) => {
    const numbers = [...array1, ...array2];
    const arrayMax = Math.max(...numbers);
    return arrayMax;
}

const arrayOne = [2, 4, 5, 9];
const arrayTwo = [50, 100, 90];

const result = arrow(arrayOne, arrayTwo);
console.log(result);
