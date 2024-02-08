"Чтобы получать и сохранять значение, в JS есть вещи, называемые переменными или привязками."

let caught = 5 * 5;
console.log(caught); //25

"После того как переменная определена, её имя можно использовать как выражение."
"Значением такого выражения является значение, которое переменная содержит в данный момент."

"Если переменная указывает на значение, это не означает, что она всегда связана с ним."

let mood = 'plus wibe';
console.log(mood); //plus wibe
mood = "minus wibe"
console.log(mood); //minus wibe

"Программа имеет доступ только к тем значениям, на которые есть ссылки."

"Рассмотрим ещё один пример:"

let sanyasDebt = 100;
sanyasDebt = sanyasDebt - 25;
console.log(sanyasDebt); //75

"Значение пустой переменной == underfind."

"Один оператор let может определять несколько привязок:"
let one = 1, two = 2; three = 3;
console.log(one + two + three); //6

"Вместо let также можно использовать const. Это слово происходит от слова constant."
"Оно определяет постоянную переменную, указывающую на одно и то же значение на протяжении всей своей жизни."

