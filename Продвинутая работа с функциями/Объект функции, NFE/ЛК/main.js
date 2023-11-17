// в JavaScript функция – это значение.
// Каждое значение в JavaScript имеет свой тип. А функция – это какой тип?
// В JavaScript функции – это объекты.

// Можно представить функцию как «объект, который может делать какое-то действие».


// Свойство «name»
function SayHi(){
    alert("Hi");
}

alert(SayHi.name); //SayHi

// Ещё одно встроенное свойство «length» содержит количество параметров функции в её
// объявлении.

function f1(a){}
function f2(a, b){}
function f3(a, b, c, d, ...rest){}
alert(f1.length); //1
alert(f2.length); //2
alert(f3.length); //4


// свойство counter для отслеживания общего количества вызовов

function SayHi2(){
    alert("Hi");
    SayHi2.counter++;
}

SayHi2.counter = 0;

SayHi2();
SayHi2();

alert( `Вызвана ${SayHi2.counter} раза` ); //Вызвана 2 раза

// Свойство функции, назначенное как sayHi.counter = 0 , не объявляет локальную
// переменную counter внутри неё. Другими словами, свойство counter и
// переменная let counter – это две независимые вещи.



// Named Function Expression или NFE – это термин для Function Expression, у которого есть
// имя.

