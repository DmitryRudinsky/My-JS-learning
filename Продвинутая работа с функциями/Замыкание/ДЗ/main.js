//1 задание

function sum(a){
    return function(b){
        return a + b;
    }
}

alert(sum(1)(2));


//2 задание

function inBetween(a, b){
    return function(x){
        return x >= a && x <= b;
    }
}

function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
}

//3 задание

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('age'));
users.forEach(user => alert(user.name)); //Pete Ann John