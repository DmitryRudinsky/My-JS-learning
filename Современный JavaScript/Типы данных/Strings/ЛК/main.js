// Свойство length содержит длину строки

alert("123456789".length); // 9

// Получить символ, который занимает позицию pos , можно с помощью квадратных скобок:
// [pos] . Также можно использовать метод charAt : str.charAt(pos)  . Первый символ
// занимает нулевую позицию:

let str = "I wanna work!";
alert(str[4]); //n

for (let charAt of str){
    alert(charAt); //I, ,w,a,n,n,a, ,w,o,r,k,!
}

// Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине и
// заменить его. Как только строка создана — она такая навсегда.

// Методы toLowerCase() и toUpperCase() меняют регистр символов

alert(str.toUpperCase()); //I WANNA WORK!
alert(str.toLowerCase()); //i wanna work!

// Если мы захотим перевести в нижний регистр какой-то конкретный символ:

alert(str[0].toLowerCase()); //i

// Существует несколько способов поиска подстроки.
// str.indexOf
// Первый метод — str.indexOf(substr, pos)  .
// Он ищет подстроку substr в строке str , начиная с позиции pos , и возвращает
// позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений.

alert(str.indexOf('wanna')); //2
alert(str.indexOf("I")); //0
alert(str.indexOf("WANNA")); //-1

// Необязательный второй аргумент позволяет начать поиск с определённой позиции.

alert(str.indexOf("w", 3)) //8

// Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле. Каждый раз,
// получив очередную позицию, начинаем новый поиск со следующей:

let srti =  'Ослик Иа-Иа посмотрел на виадук';
let target = "Иа";
let pos = 0;
while (true){
    let foundPos = srti.indexOf(target, pos);
    if (foundPos == -1) {break};
    alert(`Найдено тут: ${foundPos}`);
    pos = foundPos + 1;
}

//Рассмортим другой вариант кода

pos = -1;
while((pos = srti.indexOf(target, pos + 1)) != -1){
    alert(pos);
}

// Также есть похожий метод str.lastIndexOf(substr, position)  , который ищет с конца
// строки к её началу.
// Он используется тогда, когда нужно получить самое последнее вхождение: перед
// концом строки или начинающееся до (включительно) определённой позиции.


// При проверке indexOf в условии if есть небольшое неудобство. Такое условие не
// будет работать:

// let str = "Widget with id";
// if (str.indexOf("Widget")) {
// alert("Совпадение есть"); 
// }
// Данный код работать не будет

// Мы ищем подстроку "Widget" , и она здесь есть, прямо на позиции 0 . Но alert не
// показывается, т. к. str.indexOf("Widget") возвращает 0 , и if решает, что тест не
// пройден.
// Поэтому надо делать проверку на -1 :


str = "I love my mom";
if(str.indexOf("love") != -1) {
    alert("Real"); //Real
}

// Более современный метод str.includes(substr, pos)  возвращает true , если в строке
// str есть подстрока substr , либо false , если не


alert("Hi, I am using JavaScript".includes("JavaScript"))//true

// Это — правильный выбор, если нам необходимо проверить, есть ли совпадение, но
// позиция не нужна

if ("Hi, I am using JavaScript".includes("JavaScript")){
    alert("Good"); //Good
}

// Методы str.startsWith  и str.endsWith  проверяют, соответственно, начинается ли и
// заканчивается ли строка определённой строкой:

alert("Hi, I am using JavaScript".startsWith("Hi")); //true
alert("Hi, I am using JavaScript".endsWith("JavaScript")) //true


// В JavaScript есть 3 метода для получения подстроки: substring , substr и slice

// str.slice(start [, end])
// Возвращает часть строки от start до (не включая) end .

str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
alert( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
alert( str.slice(0, 1) );

// str.substring(start [, end])
// Возвращает часть строки между start и end .
// Это — почти то же, что и slice , но можно задавать start больше end .

// для substring эти два примера — одинаковы
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"
// …но не для slice:
alert( str.slice(2, 6) ); // "ring" (то же самое)
alert( str.slice(6, 2) ); // "" (пустая строка)

// Отрицательные значения substring , в отличие от slice , не поддерживает, они
// интерпретируются как 0 .

// str.substr(start [, length])
// Возвращает часть строки от start длины length .
// В противоположность предыдущим методам, этот позволяет указать длину вместо
// конечной позиции:

// ring, получаем 4 символа, начиная с позиции 2
alert( str.substr(2, 4) );


