//1 задание

function sumSalaries(arr){
    let sm = 0;
    for (let elem of Object.values(arr)){
        sm += elem;
    }
    return sm;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); 

//2 задание

function count(obj){
    return Object.entries(obj).length;
}

let user = {
    name: 'John',
    age: 30
};
alert( count(user) ); // 2