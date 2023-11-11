// JSON  (JavaScript Object Notation) – это общий формат для представления значений и
// объектов. Первоначально он
// был создан для JavaScript, но многие другие языки также имеют библиотеки, которые могут
// работать с ним. Таким образом, JSON легко использовать для обмена данными, когда
// клиент использует JavaScript, а сервер написан на Ruby/PHP/Java или любом другом
// языке.

// JavaScript предоставляет методы:
// JSON.stringify для преобразования объектов в JSON.
// JSON.parse для преобразования JSON обратно в объект.

// Например, здесь мы преобразуем через JSON.stringify данные студента:

let student = {
    name: "Dima",
    age: 18,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    tyanka: null
};

let json = JSON.stringify(student);
alert(json); //{"name":"Dima","age":18,"isAdmin":false,"courses":["html","css","js"],"tyanka":null}


// Метод JSON.stringify(student) берёт объект и преобразует его в строку.
// Полученная строка json называется JSON-форматированным или сериализованным
// объектом. Мы можем отправить его по сети или поместить в обычное хранилище данных.

// JSON поддерживает следующие типы данных:
// Объекты { ... }
// Массивы [ ... ]
// Примитивы:
// строки,
// числа,
// логические значения true/false ,
// null .


// JSON является независимой от языка спецификацией для данных, поэтому
// JSON.stringify пропускает некоторые специфические свойства объектов JavaScript.
// А именно:
// Свойства-функции (методы).
// Символьные свойства.
// Свойства, содержащие undefined .




let user = {
    sayHi(){
        alert("Hello");
    },
    [Symbol("id")]: 123,
    something: undefined
}

let user_JSON = JSON.stringify(user);
alert(user_JSON); //{}


// Самое замечательное, что вложенные объекты поддерживаются и конвертируются
// автоматически.

let meetup = {
    title: "Conference",
    room: {
    number: 23,
    participants: ["john", "ann"]
    }
};
alert( JSON.stringify(meetup) );
/* вся структура преобразована в строку:
{
"title":"Conference",
"room":{"number":23,"participants":["john","ann"]},
}
*/




// Исключаем и преобразуем: replacer

//Синтаксис:
// let json1 = JSON.stringify(value[, replacer, space])

// value
// Значение для кодирования.
// replacer
// Массив свойств для кодирования или функция соответствия function(key, value) .
// space
// Дополнительное пространство (отступы), используемое для форматирования.

// В большинстве случаев JSON.stringify используется только с первым аргументом. Но
// если нам нужно настроить процесс замены, например, отфильтровать циклические ссылки,
// то можно использовать второй аргумент JSON.stringify .

// Если мы передадим ему массив свойств, будут закодированы только эти свойства.

let room = {
    number: 23
};
let meetup1 = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup ссылается на room
};
room.occupiedBy = meetup1; // room ссылается на meetup
alert( JSON.stringify(meetup1, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}

// список свойств довольно длинный.
// К счастью, в качестве replacer мы можем использовать функцию, а не массив.
// Функция будет вызываться для каждой пары (key, value) , и она должна возвращать
// заменённое значение, которое будет использоваться вместо исходного. Или undefined ,
// чтобы пропустить значение.
// В нашем случае мы можем вернуть value «как есть» для всего, кроме occupiedBy .
// Чтобы игнорировать occupiedBy , код ниже возвращает undefined :


let room2 = {
    number: 24
};

let meetup2 = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room2 // meetup ссылается на room
};

room.occupiedBy = meetup;

alert(JSON.stringify(meetup2, function replacer(key, value){
    alert(`${key}: ${value}`);
    return (key == "occupiedBy") ? undefined : value;
}));



// Форматирование: space
// Третий аргумент в JSON.stringify(value, replacer, space) – это количество
// пробелов, используемых для удобного форматирования.
// Ранее все JSON-форматированные объекты не имели отступов и лишних пробелов. Это
// нормально, если мы хотим отправить объект по сети. Аргумент space используется
// исключительно для вывода в удобочитаемом виде.
// Ниже space = 2 указывает JavaScript отображать вложенные объекты в несколько строк
// с отступом в 2 пробела внутри объекта:


let user2 = {
    name: "John",
    age: 25,
    roles: {
    isAdmin: false,
    isEditor: true
    }
};

alert(JSON.stringify(user2, null, 2));



// Пользовательский «toJSON»

// Как и toString для преобразования строк, объект может предоставлять метод toJSON
// для преобразования в JSON. JSON.stringify автоматически вызывает его, если он
// есть.

let room3 = {
    number: 23
};
let meetup3 = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
};
alert( JSON.stringify(meetup3) );
/*
{
"title":"Conference",
"date":"2017-01-01T00:00:00.000Z", // (1)
"room": {"number":23} // (2)
}
*/
    

// Как видим, date (1) стал строкой. Это потому, что все объекты типа Date имеют
// встроенный метод toJSON , который возвращает такую строку.


// Теперь давайте добавим собственную реализацию метода toJSON в наш объект room(2) :

let room4 = {
    number: 23,
    toJSON() {
    return this.number;
    }
};

let meetup4 = {
    title: "Conference",
    room
};

alert( JSON.stringify(room) ); // 23
alert( JSON.stringify(meetup) );
/*
{
"title":"Conference",
"room": 23
}
*/
// Как видите, toJSON используется как при прямом вызове JSON.stringify(room) , так
// и когда room вложен в другой сериализуемый объект.





// JSON.parse
// Чтобы декодировать JSON-строку, нам нужен другой метод с именем JSON.parse.
// Синтаксис:
// let value = JSON.parse(str, [reviver]);
// str
// JSON для преобразования в объект.
// reviver
// Необязательная функция, которая будет вызываться для каждой пары (ключ,
// значение) и может преобразовывать значение.

let numbers = "[1, 2, 3, 4]";
numbers = JSON.parse(numbers);
alert(numbers[0]); //1


let user3 = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user3 = JSON.parse(user3);
alert( user3.friends[1] ); // 1


