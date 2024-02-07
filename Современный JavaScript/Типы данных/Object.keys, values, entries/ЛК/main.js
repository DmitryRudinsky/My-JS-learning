// Object.keys, values, entries

// Для простых объектов доступны следующие методы:
// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение] .

// Первое отличие от map в том, что мы должны вызвать Object.keys(obj) , а не obj.keys() .

// Почему так? Основная причина – гибкость. Помните, что объекты являются основой всех
// сложных структур в JavaScript. У нас может быть объект data , который реализует свой
// собственный метод data.values() . И мы всё ещё можем применять к нему стандартный
// метод Object.values(data) .

// Второе отличие в том, что методы вида Object.* возвращают «реальные» массивы, а не
// просто итерируемые объекты. Это в основном по историческим причинам.

//Например,

let jonh = {
    name: "Jhon",
    age: "30"
};

alert(Object.keys(jonh)); //name,age
alert(Object.values(jonh)); //Jhon,30
alert(Object.entries(jonh)); //name,Jhon,age,30

// У объектов нет множества методов, которые есть в массивах, например map , filter и
// других.
// Если мы хотели бы их применить, то можно использовать Object.entries с
// последующим вызовом Object.fromEntries :
// 1. Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj .
// 2. На нём вызываем методы массива, например, map .
// 3. Используем Object.fromEntries(array) на результате, чтобы преобразовать его
// обратно в объект.


let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrice = Object.fromEntries(
    Object.entries(prices).map(([keys, values]) => [keys, values * 2])
);

alert(doublePrice["meat"]);