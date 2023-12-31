// Опциональная цепочка ?. — это безопасный способ доступа к свойствам вложенных
// объектов, даже если какое-либо из промежуточных свойств не существует.

// Опциональная цепочка ?. останавливает вычисление и возвращает undefined , если
// часть перед ?. имеет значение undefined или null .

let user = {}; // пользователь без адреса
alert( user?.address?.street ); // undefined (без ошибки)

let user1 = null;
alert( user1?.address ); // undefined
alert( user1?.address.street ); // undefined

// Используйте ?. только тогда, когда допускаете ситуацию, что значение перед ним не
// существует.
// Например, если по нашей логике объект user точно существует, но его свойство
// address является необязательным, то предпочтительнее использовать следующую
// конструкцию: user.address?.street .
// Тогда если переменная user по ошибке окажется пустой, мы увидим программную
// ошибку и исправим это.

let user2 = {
    admin() {
        alert("Я админ");
    }
};

let user3 = {};

user2.admin?.();
user3.admin?.();
// Опциональная цепочка ?. — это не оператор, а специальная синтаксическая конструкция,
// которая также работает с функциями и квадратными скобками.
// Например, ?.() используется для вызова потенциально несуществующей функции.


let user4 = {
    firstName: "Ivan"
};

let user5 = {};

let key = "firstName";

alert(user4?.[key]);
alert(user5?.[key]);

// Также существует синтаксис ?.[] , если значение свойства требуется получить с
// помощью квадратных скобок [] , а не через точку . . Как и в остальных случаях, такой
// способ позволяет защититься от ошибок при доступе к свойству объекта, которого может не
// быть.


// Можно использовать ?. для безопасного чтения и удаления, но не для записи

