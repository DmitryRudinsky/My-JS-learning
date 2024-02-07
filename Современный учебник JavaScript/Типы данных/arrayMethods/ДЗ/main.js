//1 задание

function camelize(str){
    let arr = str.split("-");
    arr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
    alert(arr.join(""));
}

camelize("list-style-image");

//2 задание

function filterRange(arr, a, b){
    let someNumbers = arr.filter((item) => item >= a && item <= b);
    return someNumbers;
}

arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered );
alert( arr );

// 3 задание

function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]

//4 задание

function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    if (a == b) return 0;
}

arr = [5, 2, 1, -10, 8];
arr.sort(compareNumeric);
alert(arr);

// ИЛИ

arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr);

// 5 задание

function copySorted(arr){
    return arr.slice().sort();
}
arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

// 6 задание

function Calculator(){
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }
    this.calculate = function(str) {
        split = str.split(' '),
        a = +split[0],
        b = +split[2],
        op = split[1]

        if(!this.methods[op] || isNaN(a) || isNaN(b)){
            return NaN;
        }else{
            return this.methods[op](a, b);
        }
    }
    this.addMethod = function(name, func){
        if(!this.methods[name]){
            this.methods[name] = func;
        }
    }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8


//7 задание

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };

users = [ vasya, petya, masha ];

let names = users.map(item => item.name);
alert( names );


//8 задание

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped  = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: `${user.id}`
}));

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // Вася Пупкин

//9 задание

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };

arr = [ vasya, petya, masha ];

function sortByAge(mas){
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

sortByAge(arr);
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя


// 10 задание

arr = [1, 2, 3];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}  

//11 задание

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 29 };
arr = [ vasya, petya, masha ];


function getAverageAge(users){
    let result = users.reduce((sm, name) => sm += name.age, 0) / users.length;
    return result;
}

alert( getAverageAge(arr) );


//12 задание

function unique(arr) {
    let result = [];
    for (let elem of arr){
        if (!result.includes(elem)){
            result.push(elem);
        }
    }
    return result;
}
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
alert( unique(strings) ); // кришна, харе, :-O