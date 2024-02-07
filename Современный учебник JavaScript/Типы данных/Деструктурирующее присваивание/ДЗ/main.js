// 1 задание

let user = {
    name: "John",
    years: 30
};

let {name, years : age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

//2 задание 

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};

function topSalary(obj){
    let mx = -1;
    let worker = null;
    for(let [name, money] of Object.entries(obj)){
        if (mx < money){
            mx = money;
            worker = name;
        }
    }
    return worker;
}


alert(topSalary(salaries));