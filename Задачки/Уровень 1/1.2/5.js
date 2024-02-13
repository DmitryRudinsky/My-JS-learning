"Даны два числа. Проверьте, что первые цифры этих чисел совпадают."

let num1 = 123456789;
let num2 = 12234567;

let first1 = Number(String(num1)[0]);
let first2 = Number(String(num2)[0]);

if(first1 == first2) console.log(true);
else console.log(false);

