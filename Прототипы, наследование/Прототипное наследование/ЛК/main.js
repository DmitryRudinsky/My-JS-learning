// В программировании мы часто хотим взять что-то и расширить.
// Например, у нас есть объект user со своими свойствами и методами, и мы хотим создать
// объекты admin и guest как его слегка изменённые варианты. Мы хотели бы повторно
// использовать то, что есть у объекта user , не копировать/переопределять его методы, а
// просто создать новый объект на его основе.
// Прототипное наследование — это возможность языка, которая помогает в этом.


// В JavaScript объекты имеют специальное скрытое свойство [[Prototype]] (так оно
//названо в спецификации), которое либо равно null , либо ссылается на другой объект.
//Этот объект называется «прототип»:

// Прототип даёт нам немного «магии». Когда мы хотим прочитать свойство из object , а оно
// отсутствует, JavaScript автоматически берёт его из прототипа. В программировании такой
// механизм называется «прототипным наследованием». Многие интересные возможности
// языка и техники программирования основываются на нём.

// Свойство [[Prototype]] является внутренним и скрытым, но есть много способов
// задать его.
// Одним из них является использование __proto__ , например так:


let animal = {
    eats: true
};

let rabbit = {
    jump: true
};

rabbit.__proto__ = animal;

// Обратите внимание, что __proto__ — не то же самое, что [[Prototype]] . Это
// геттер/сеттер для него.
// Он существует по историческим причинам, в современном языке его заменяют функции
// Object.getPrototypeOf/Object.setPrototypeOf , которые также получают/
// устанавливают прототип. Мы рассмотрим причины этого и сами функции позже.
// По спецификации __proto__ должен поддерживаться только браузерами, но по
// факту все среды, включая серверную, поддерживают его. Далее мы будем в примерах
// использовать __proto__ , так как это самый короткий и интуитивно понятный способ
// установки и чтения прототипа.

alert(rabbit.jump); //true
alert(rabbit.eats); //true

let animal2 = {
    eats: true,
    walk(){
        alert("Animal walk")
    }
};

let rabbit2 = {
    jump: true,
    __proto__: animal2
};

rabbit2.walk(); // Animal walk


// Есть только два ограничения:
// 1. Ссылки не могут идти по кругу. JavaScript выдаст ошибку, если мы попытаемся назначить
// __proto__ по кругу.
// 2. Значение __proto__ может быть объектом или null . Другие типы игнорируются.


// Прототип используется только для чтения свойств.
// Операции записи/удаления работают напрямую с объектом.


// Свойства-аксессоры – исключение, так как запись в него обрабатывается функцией сеттером. То есть, это, фактически, вызов функции.
// По этой причине admin.fullName работает корректно в приведённом ниже коде:

let user = {
    name: "John",
    surname: "Smith",
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};
alert(admin.fullName); // John Smith (*)
// срабатывает сеттер!
admin.fullName = "Alice Cooper"; // (**)
alert(admin.name); // Alice
alert(admin.surname); // Cooper


// В приведённом выше примере может возникнуть интересный вопрос: каково значение
// this внутри set fullName(value) ? Куда записаны свойства this.name и
// this.surname : в user или в admin ?
// Ответ прост: прототипы никак не влияют на this .
// Неважно, где находится метод: в объекте или его прототипе. При вызове метода
// this — всегда объект перед точкой.

// Таким образом, вызов сеттера admin.fullName= в качестве this использует admin , а
// не user .



// Например, здесь animal представляет собой «хранилище методов», и rabbit
// использует его.
// Вызов rabbit.sleep() устанавливает this.isSleeping для объекта rabbit :


let animal3 = {
    walk() {
        if (!this.isSleeping) {
            alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};
let rabbit3 = {
    name: "White Rabbit",
    __proto__: animal
};
    // модифицирует rabbit.isSleeping
rabbit.sleep;
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)


// Цикл for in


// Цикл for..in проходит не только по собственным, но и по унаследованным свойствам
// объекта.
// Например:

animal = {
    eats: true
};
rabbit = {
    jumps: true,
    __proto__: animal
};

alert(Object.keys(rabbit)); //jumps

for(let [key, value] of Object.entries(rabbit)){
    alert(`${key}, ${value}`); //jumps, true; 
}

for(let key in rabbit) alert(key); // jumps, затем eats

// Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи
// встроенного метода obj.hasOwnProperty(key) : он возвращает true , если у obj есть
// собственное, не унаследованное, свойство с именем key .


animal = {
eats: true
};

rabbit = {
    jumps: true,
    __proto__: animal
};

for(let prop in rabbit){
    let checker = rabbit.hasOwnProperty(prop);
    if (checker){
        alert(`${prop} is our`); //jumps is our
    } else{
        alert(`${prop} is inherited`); //eats is inherited
    }
};



