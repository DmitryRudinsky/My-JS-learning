// В первой главе этого раздела мы упоминали, что существуют современные методы работы
// с прототипами.
// Свойство __proto__ считается устаревшим, и по стандарту оно должно поддерживаться
// только браузерами.
// Современные же методы это:

// Object.create(proto, [descriptors])  – создаёт пустой объект со свойством
// [[Prototype]] , указанным как proto , и необязательными дескрипторами свойств
// descriptors .

// Object.getPrototypeOf(obj)  – возвращает свойство [[Prototype]] объекта obj .

// Object.setPrototypeOf(obj, proto)  – устанавливает свойство [[Prototype]] объекта
// obj как proto .


let animal = {
    eats: true
};
// создаём новый объект с прототипом animal
let rabbit = Object.create(animal);
alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit
Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}

// У Object.create есть необязательный второй аргумент: дескрипторы свойств. Мы
// можем добавить дополнительное свойство новому объекту таким образом:

let animal2 = {
    eats: true
};
let rabbit2 = Object.create(animal2, {
    jumps: {
        value: true,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
alert(rabbit2.jumps); // true

let obj = {};
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

// Такой вызов создаёт точную копию объекта obj , включая все свойства: перечисляемые и
// неперечисляемые, геттеры/сеттеры для свойств – и всё это с правильным свойством
// [[Prototype]] .

