//1 задание

let obj = {}

function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A;
let b = new B;

alert( a == b ); // true

// 2 задание

function Calculator() {
    this.read = function() {
        this.a = +prompt('A?', 0);
        this.b = +prompt('B?', 0);
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert("Сумма:" + calculator.sum());
alert("Умножение:" + calculator.mul())


// 3 задание

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function(){
        this.value += +prompt("Сколько ещё нужно добавить?", 0);
    } 
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);