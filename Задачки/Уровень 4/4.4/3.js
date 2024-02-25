"Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка."

const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
);

const numbers = generateArray(10, 40);
console.log(numbers); //=> [36,  5,  9, 35, 23, 38, 27, 35, 34,  6]