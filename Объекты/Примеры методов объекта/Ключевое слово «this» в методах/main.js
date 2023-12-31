let user = {
    name: "Jhon",
    age: 30,
    SayHi(){
        alert(this.name);
    }
}

user.SayHi(); //Jhon

//Здесь во время выполнения кода user.sayHi() значением this будет являться user (ссылка на объект user ).

//Мы, конечно, можем использовать user.name, однако надо учитывать, что переменная user - это ссылка на объект, поэтому если мы скопируем его и изменим, то
//изменится и name => лучше всего испольщовать именно такую консткрукцию. Пример:

let user2 = {
    name: "Bill",
    age: 20,
    SayHi() {
        alert(`Hi, ${user2.name}`);
    }
}

user2.SayHi() //Hi, Bill

let admin = user2;

admin.name = "Petya";
user2.SayHi(); //Hi, Petya


//Значение this вычисляется во время выполнения кода и зависит от контекста.
//Например, здесь одна и та же функция назначена двум разным объектам и имеет различное значение «this» при вызовах:

let user3 = { name: "Джон" };
let admin2 = { name: "Админ" };

function SayHi() {
    alert(this.name);
}

user3.f = SayHi;
admin2.f = SayHi;

user3.f(); //Джон
admin2.f(); //Админ

// Правило простое: при вызове obj.f() значение this внутри f равно obj . Так что, в приведённом примере это user или admin .

function sayHiThis() {
    alert(this);
    }
sayHiThis(); // undefined


//В JavaScript this является «свободным», его значение вычисляется в момент вызова
//метода и не зависит от того, где этот метод был объявлен, а зависит от того, какой
//объект вызывает метод (какой объект стоит «перед точкой»).



//Некоторые хитрые способы вызова метода приводят к потере значения this , например:

let user4 = {
    name: "Джон",
    hi() { alert(this.name); },
    bye() { alert("Пока"); }
};
user4.hi(); // Джон (простой вызов метода работает хорошо)
// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name


// (user.name == "Джон" ? user.hi : user.bye)(); // Ошибка!


//В последней строчке кода используется условный оператор ? , который определяет, какой
//будет вызван метод ( user.hi или user.bye ) в зависимости от выполнения условия. В
//данном случае будет выбран user.hi .
//Затем метод тут же вызывается с помощью скобок () . Но вызов не работает как
//положено!
//Вы можете видеть, что при вызове будет ошибка, потому что значением "this" внутри
//функции становится undefined (полагаем, что у нас строгий режим).

// Для работы вызовов типа user.hi() , JavaScript использует трюк – точка '.'
// возвращает не саму функцию, а специальное значение «ссылочного типа»,
// называемого



//У стрелочных функций нет «this»


// Стрелочные функции особенные: у них нет своего «собственного» this . Если мы
// используем this внутри стрелочной функции, то его значение берётся из внешней
// «нормальной» функции.


let user5 = {
    name: "Valera",
    age: 18,
    SayHi() {
        let arrow = () => {alert(`Hi, ${this.name}`)};
        arrow();
    }
}

user5.SayHi(); //Hi, Valera

//arrow использует значение this из внешнего метода user.SayHi

