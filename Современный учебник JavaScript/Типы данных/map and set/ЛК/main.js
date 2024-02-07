// Map – это коллекция ключ/значение, как и Object . Но основное отличие в том, что
// Map позволяет использовать ключи любого типа.

let map1 = new Map() //создание коллекции
map1.set("key", "value") // записывает по ключу key значение value
map1.get("key") //возвращает значение по ключу или underfind, если ключ key отсутствует
map1.has("key") //возвращает true, если ключ присутствует в коллекции, иначе false
map1.delete("key") //удаляет элемент по ключу кей
map1.clear() //очищает коллекцию от всех элементов
map1.size //возвращает текущее количество элементов

// Например:
let map = new Map();
map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

//обычный объект Object приводит ключи к строкам,
//а map сохраняет тип ключа

alert(map.get("1")); //"str1"
alert(map.get(1)); //"num1"
alert(map.size); //3


//map может использовать объекты в качестве ключей

let john = {name: "John"};
// давайте сохраним количество посещений для каждого пользователя
let visitingCountMap = new Map();
// объект john - это ключ для значения в объекте Map
visitingCountMap.set(john, "123");
alert(visitingCountMap.get(john)); //123

// Использование объектов в качестве ключей – это одна из известных и часто применяемых
// возможностей объекта Map . При строковых ключах обычный объект Object может
// подойти, но для ключей-объектов – уже нет.

// Перебор Map

//существует 3 метода перебора map:

map.keys() //возвращает итерируемый объект по ключам
map.values() //возвращает итерируемый объект по значениям
map.entries() //возвращает итерируемый объект по парам вида [key, value], используется по умолчанию в for...of


let recipeMap = new Map([
    ["огурец", "500"],
    ["помидор", "350"],
    ["лук", "50"]
]);

//перебор по ключам
for(let vegetables of recipeMap.keys()){
    alert(vegetables); //огурец, помидор, лук
}
// перебор по значениям
for(let cost of recipeMap.values()){
    alert(cost); //500, 350, 50
}
// перебор по [ключ, значение]
for(let entry of recipeMap.entries()){
    alert(entry); //огурец,500, помидор,350, лук,50
}

// Map имеет встроенный метод forEach , схожий со встроенным методом
// массивов Array :
recipeMap.forEach((key, values, map) => {
    alert(`key: ${key}, value: ${values}, map: ${map}`); //key: 500, value: огурец, map: [object Map] и т.д.
})


//при создании map мы можем указать массив(или другой итерируемый объект) с парами ключ-значение для инициализации, как здесь:

let map2 = new Map([
    ['2', 'str2'],
    [2, 'num2'],
    [false, 'bool2']
]);

alert(map2.get(2)) //num2

// Если у нас уже есть обычный объект, и мы хотели бы создать Map из него, то поможет
// встроенный метод Object.entries(obj)  , который получает объект и возвращает массив пар
// ключ-значение для него, как раз в этом формате.
// Так что мы можем создать Map из обычного объекта следующим образом:


let obj = {
    name: "Dima",
    age: "18"
};

let DimaMap = new Map(Object.entries(obj));
for(let inf of DimaMap.entries()){
    alert(inf); //name,Dima, age,18
};

// Есть метод Object.fromEntries , который делает противоположное: получив массив
// пар вида [ключ, значение] , он создаёт из них объект:

let prices = new Map([
    ["banana", 2],
    ["apple", 1],
    ["watermellon", 5]
])

let pricesObj = Object.fromEntries(prices.entries());

alert(pricesObj["banana"]); //2










//SET

//Объект Set - это особый вид коллекции: "множество" значений без ключей, где каждое значение может появляться только один раз.

// основные методы:
let arr = [1, 2, 2, 3, 4, 5, 5, 6, 6, 6, 7, 8, 19]
let set = new Set(arr); // создает Set, и если в качестве аргумента был предоставлен итерируемый объект, то копирует его значения в новый set
set.add("value") // добавляет значение (если оно есть, то ничего не добавляет). Возвращает тот же объект set
set.delete("value") //удаляет значение value и возвращает true, если значение было во множество и false, если нет
set.has("value") //возвращает true, если значение есть во множестве, false в противном случае
set.clear() //удаляет все имеющиеся значения
set.size //возвращает количество элементов множества

// Основная «изюминка» – это то, что при повторных вызовах set.add() с одним и тем же
// значением ничего не происходит, за счёт этого как раз и получается, что каждое значение
// появляется один раз.
// Например, мы ожидаем посетителей, и нам необходимо составить их список. Но повторные
// визиты не должны приводить к дубликатам. Каждый посетитель должен появиться в списке
// только один раз.
// Множество Set – как раз то, что нужно для этого:

let alena = {name: "Alena"};
let yana = {name: "Yana"};
let marat = {name: "Marat"};

let setOfVisiters = new Set();

setOfVisiters.add(alena);
setOfVisiters.add(yana);
setOfVisiters.add(marat);
setOfVisiters.add(alena);
setOfVisiters.add(yana);

alert(setOfVisiters.size);

alert(setOfVisiters.size);
for(let users of setOfVisiters){
    alert(users.name); //Alena, Yana, Marat
}

// Перебор объекта Set

// Мы можем перебрать содержимое объекта set как с помощью метода for..of , так и
// используя forEach :

let abobaSet = new Set(["a", "bo", "ba"]);

for (let value of abobaSet) alert(value); //a, bo, ba

abobaSet.forEach((value, valueAgain) => {
    alert(value);//a, bo, ba
})

