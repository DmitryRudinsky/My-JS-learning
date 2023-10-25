let billion = 1000000000;
let billion1 = 1e9;
alert(billion == billion1) //true

let ms = 0.000001;
let ms1 = 1e-6; 
alert(ms == ms1) //true

//toString(base)
// Метод num.toString(base) возвращает строковое представление числа num в
// системе счисления base .

let num = 255;
alert( num.toString(16) ); // ff
alert( num.toString(2) ); // 11111111

Math.floor
// Округление в меньшую сторону: 3.1 становится 3 , а -1.1 — -2 .

Math.ceil
// Округление в большую сторону: 3.1 становится 4 , а -1.1 — -1 .

Math.round
// Округление до ближайшего целого: 3.1 становится 3 , 3.6 — 4 , а -1.1 — -1 .

let num1 = 12.34;
alert(num1.toFixed(1)) //12.3

// Метод toFixed(n)  округляет число до n знаков после запятой и возвращает строковое
// представление результата

// Округляет значение до ближайшего числа, как в большую, так и в меньшую сторону,
// аналогично методу Math.round 

let num2 = 12.36;
alert(num2.toFixed(1)) //12.4

//Результатом toFixed является строка


// isNaN(value) преобразует значение в число и проверяет является ли оно NaN 
alert(isNaN(NaN)) //true
alert(isNaN("notAnumber")) //false


// isFinite(value) преобразует аргумент в число и возвращает true , если оно
// является обычным числом, т.е. не NaN/Infinity/-Infinity :

alert(isFinite(15)) //true
alert(isFinite(NaN)) //false
alert(isFinite(Infinity)) //false

// Иногда isFinite используется для проверки, содержится ли в строке число:

let question = +prompt("Введи число", "");
alert(isFinite(question)) //true, если question != infinity/NaN

let a = 10;
let b = "10";
alert(a == b) //true
alert(a === b) //false
alert(Object.is(a, b)) //false

// Object.is = (===)

// есть parseInt и parseFloat .
// Они «читают» число из строки. Если в процессе чтения возникает ошибка, они возвращают
// полученное до ошибки число. Функция parseInt возвращает целое число, а
// parseFloat возвращает число с плавающей точкой:

alert(parseInt("100px")) //100
alert(parseFloat("12.5$")) //12.5

// Функция parseInt() имеет необязательный второй параметр. Он определяет
// систему счисления, таким образом parseInt может также читать строки с
// шестнадцатеричными числами, двоичными числами и т.д.:

alert(parseInt("2n9cpx", 36)) //123456

Math.random()
// Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)

Math.max("a, b, c ...") / Math.min("a, b, c, ...")
// Возвращает наибольшее/наименьшее число из перечисленных аргументов.

alert(Math.max(1, 2, 4, 6, 87, 999, 10009819, 5453421543, 9, 10)) //5453421543
alert(Math.min(1, 2, 4, 6, 87, 999, 10009819, 5453421543, 9, 10)) //1

Math.pow("n", "power")
// Возвращает число n , возведённое в степень power
alert(Math.pow(2, 3)) // 8

