// Оператор instanceof позволяет проверить, к какому классу принадлежит объект, с
// учётом наследования.
// Такая проверка может потребоваться во многих случаях. Здесь мы используем её для
// создания полиморфной функции, которая интерпретирует аргументы по-разному в
// зависимости от их типа.

// Синтаксис
// obj instanceof Class
// Оператор вернёт true , если obj принадлежит классу Class или наследующему от
// него.

class Rabbit{}
let rabbit = new Rabbit();
alert(rabbit instanceof Rabbit); //true

// Также это работает с функциями-конструкторами:
// И для встроенных классов, таких как Array :

let arr = [1, 2, 3];
alert(arr instanceof Array); //true
alert(arr instanceof Object); //true


// Обычно оператор instanceof просматривает для проверки цепочку прототипов. Но это
// поведение может быть изменено при помощи статического метода
// Symbol.hasInstance .


// Алгоритм работы obj instanceof Class работает примерно так:


// 1. Если имеется статический метод Symbol.hasInstance , тогда вызвать его:
// Class[Symbol.hasInstance](obj) . Он должен вернуть либо true , либо false , и
// это конец. Это как раз и есть возможность ручной настройки instanceof .

class Animal {
    static [Symbol.hasInstance](obj){
        if (obj.canEat) return true;
    }
}

let obj = { canEat: true };
alert(obj instanceof Animal); //true

// 2. Большая часть классов не имеет метода Symbol.hasInstance . В этом случае
// используется стандартная логика: проверяется, равен ли Class.prototype одному из
// прототипов в прототипной цепочке obj .
// Другими словами, сравнивается:

// obj.__proto__ === Class.prototype?
// obj.__proto__.__proto__ === Class.prototype?
// obj.__proto__.__proto__.__proto__ === Class.prototype?
// ...
// если какой-то из ответов true - возвратить true
// если дошли до конца цепочки - false

// В примере выше rabbit.__proto__ === Rabbit.prototype , так что результат
// будет получен немедленно.
// В случае с наследованием, совпадение будет на втором шаге:

class Animal2 {}
class Rabbit2 extends Animal {}
let rabbit2 = new Rabbit();
alert(rabbit2 instanceof Animal); // true
// rabbit.__proto__ === Rabbit.prototype
// rabbit.__proto__.__proto__ === Animal.prototype (совпадение!)

