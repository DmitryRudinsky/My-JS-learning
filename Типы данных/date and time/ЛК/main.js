// встроенный объект Date содержит дату и время, а также
// предоставляет методы управления ими.

// его можно использовать для хранения времени создания/изменения, для
// измерения времени или просто для вывода текущей даты.

// Для создания нового объекта Date нужно вызвать конструктор new Date() с одним из
// следующих аргументов:
// new Date()
// Без аргументов – создать объект Date с текущими датой и временем:

let now = new Date();
alert(now); //Fri Nov 10 2023 02:41:32 GMT+0300 (Москва, стандартное время)

// 0 соответствует 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );


// Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970
// года, называется таймстамп (англ. timestamp).
// Это – легковесное численное представление даты. Из таймстампа всегда можно получить
// дату с помощью new Date(timestamp) и преобразовать существующий объект Date в
// таймстамп, используя метод date.getTime() (см. ниже).
// Датам до 1 января 1970 будут соответствовать отрицательные таймстампы, например:

let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );


// new Date(datestring)
// Если аргумент всего один, и это строка, то из неё «прочитывается» дата. Алгоритм разбора
// – такой же, как в Date.parse , который мы рассмотрим позже.

let date = new Date("2017-01-26");
alert(date); //Thu Jan 26 2017 03:00:00 GMT+0300 (Москва, стандартное время)
// Время не указано, поэтому оно ставится в полночь по Гринвичу и
// меняется в соответствии с часовым поясом места выполнения кода

// new Date(year, month, date, hours, minutes, seconds, ms)
// Создать объект Date с заданными компонентами в местном часовом поясе. Обязательны
// только первые два аргумента.
// year должен состоять из четырёх цифр: значение 2013 корректно, 98 – нет.
// month начинается с 0 (январь) по 11 (декабрь).
// Параметр date здесь представляет собой день месяца. Если параметр не задан, то
// принимается значение 1 .
// Если параметры hours/minutes/seconds/ms отсутствуют, их значением становится 0 .

let year2011 = new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
let year2011_2 = new Date(2011, 0, 1); // то же самое, так как часы и проч. равны 0

// Получение компонентов даты

// Существуют методы получения года, месяца и т.д. из объекта Date :

getFullYear() //Получить год (4 цифры)
getMonth() // Получить месяц, от 0 до 11.
getDate() //Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
getHours(), getMinutes(), getSeconds(), getMilliseconds() // Получить, соответственно, часы, минуты, секунды или миллисекунды.
getDay()
//Вернуть день недели от 0 (воскресенье) до 6 (суббота). Несмотря на то, что в ряде стран
// за первый день недели принят понедельник, в JavaScript начало недели приходится на
// воскресенье.


// Все вышеперечисленные методы возвращают значения в соответствии с местным
// часовым поясом.
// Однако существуют и их UTC-варианты, возвращающие день, месяц, год для временной
// зоны UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay()

// Если нужно просто измерить время, объект Date нам не нужен.
// Существует особый метод Date.now() , возвращающий текущую метку времени.
// Семантически он эквивалентен new Date().getTime() , однако метод не создаёт
// промежуточный объект Date . Так что этот способ работает быстрее и не нагружает
// сборщик мусора.
// Данный метод используется из соображений удобства или когда важно быстродействие,
// например, при разработке игр на JavaScript или других специализированных приложений.

let start = Date.now(); // количество миллисекунд с 1 января 1970 года
// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
    return doSomething;
}
let end = Date.now(); // заканчиваем отсчёт времени
alert( `Цикл отработал за ${end - start} миллисекунд` );

