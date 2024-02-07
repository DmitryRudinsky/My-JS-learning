// Флаги свойств

// Помимо значения value , свойства объекта имеют три специальных атрибута (так
// называемые «флаги»).

// writable – если true , свойство можно изменить, иначе оно только для чтения.

// enumerable – если true , свойство перечисляется в циклах, в противном случае
// циклы его игнорируют.

// configurable – если true , свойство можно удалить, а эти атрибуты можно изменять,
// иначе этого делать нельзя.

// Мы ещё не встречали эти атрибуты, потому что обычно они скрыты. Когда мы создаём
// свойство «обычным способом», все они имеют значение true . Но мы можем изменить их
// в любое время.
// Сначала посмотрим, как получить их текущие значения.
// Метод Object.getOwnPropertyDescriptor  позволяет получить полную информацию о
// свойстве.
// Его синтаксис:

// let descriptor0 = Object.getOwnPropertyDescriptor(obj, propertyName);

// obj
// Объект, из которого мы получаем информацию.
// propertyName
// Имя свойства.


let user = {
    name: "Dima"
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

alert(JSON.stringify(descriptor, null, 2));

/* дескриптор свойства:
{
"value": "John",
"writable": true,
"enumerable": true,
"configurable": true
}
*/


// Чтобы изменить флаги, мы можем использовать метод Object.defineProperty

// Object.defineProperty(obj, propertyName, descriptor)

// obj , propertyName
// Объект и его свойство, для которого нужно применить дескриптор.
// descriptor
// Применяемый дескриптор.

// Если свойство существует, defineProperty обновит его флаги. В противном случае
// метод создаёт новое свойство с указанным значением и флагами; если какой-либо флаг не
// указан явно, ему присваивается значение false .


let user2 = {};

Object.defineProperty(user2, "name", {
    value: "Dima"
});

descriptor = Object.getOwnPropertyDescriptor(user2, "name");

alert(JSON.stringify(descriptor, null, 2));

/*
{
"value": "John",
"writable": false,
"enumerable": false,
"configurable": false
}
*/


// Только для чтения
// Сделаем свойство user.name доступным только для чтения. Для этого изменим флаг
// writable :

let user3 = {
    "name": "Dima"
};

Object.defineProperty(user3, "name", {
    writable: false
});

user3.name = "Vova";
 // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'

//  Теперь никто не сможет изменить имя пользователя, если только не обновит
// соответствующий флаг новым вызовом defineProperty .



// Неперечислимое свойство

// Теперь добавим собственный метод toString к объекту user .
// Встроенный метод toString в объектах – неперечислимый, его не видно в цикле
// for..in . Но если мы напишем свой собственный метод toString , цикл for..in
// будет выводить его по умолчанию:


let user4 = {
    name: "Dimasik",
    toString(){
        return this.name;
    }
};


for(let key in user4) alert(key); //name, toString

Object.defineProperty(user4, "toString", {
    enumerable: false
});

for(let key in user4) alert(key); //name


// Неконфигурируемое свойство


// Флаг неконфигурируемого свойства ( configurable:false ) иногда предустановлен для
// некоторых встроенных объектов и свойств.
// Неконфигурируемое свойство не может быть удалено.
// Например, свойство Math.PI – только для чтения, неперечислимое и
// неконфигурируемое:


descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
"value": 3.141592653589793,
"writable": false,
"enumerable": false,
"configurable": false
}
*/


// Определение свойства как неконфигурируемого – это дорога в один конец. Мы не сможем
// отменить это действие, потому что defineProperty не работает с неконфигурируемыми
// свойствами.
// В коде ниже мы делаем user.name «навечно запечатанной» константой:



let user5 = {};

Object.defineProperty(user5, "name", {
    value: "Dimka",
    writable: false,
    configurable: false
});

// теперь невозможно изменить user.name или его флаги
// всё это не будет работать:
// user.name = "Pete"
// delete user.name
// defineProperty(user, "name", ...)
Object.defineProperty(user5, "name", {writable: true}); // Ошибка


// Метод Object.defineProperties


// Существует метод Object.defineProperties(obj, descriptors)  , который позволяет
// определять множество свойств сразу.
// Его синтаксис:

// Object.defineProperties(obj, {
//     prop1: descriptor1,
//     prop2: descriptor2
//     // ...
// });
    

let user6 = {};
Object.defineProperties(user6, {
    "name": {value: "Sunboy", writable: false, enumerable: true, configurable: false},
    "surname": {value: "Prorock", writable:true}
});

// Object.getOwnPropertyDescriptors

// Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом
// Object.getOwnPropertyDescriptors(obj)  .
// Вместе с Object.defineProperties этот метод можно использовать для клонирования
// объекта вместе с его флагами:

let user7 = {};
let clone = Object.defineProperties(user7, Object.getOwnPropertyDescriptors(user6));

// Обычно при клонировании объекта мы используем присваивание, чтобы скопировать его
// свойства:

// for (let key in user) {
//     clone[key] = user[key]
// }
    

// Но это не копирует флаги. Так что если нам нужен клон «получше», предпочтительнее
// использовать Object.defineProperties .
// Другое отличие в том, что for..in игнорирует символьные свойства, а
// Object.getOwnPropertyDescriptors возвращает дескрипторы всех свойств, включая
// свойства-символы.

