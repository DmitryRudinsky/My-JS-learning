"Дано число. Выведите в консоль сумму первой и последней цифры этого числа."

let num = 1230325943009;

let last = num % 10;
let first = Number(String(num)[0]);
console.log(first + last); //10