let user = {
    name: "Jhon",
    age: 30
}

user.SayHi = function(){
    alert(`Hello, my friend, ${user.name}`);
}

user.SayHi();  // Hello, my friend, Jhon


//Или мы можем сделать по-другому 

let user2 = {
    name: "Fred",
    age: 30
};

function SayHi() {
    alert(`Hello, my friend, ${user2.name}`);
}

user2.SayHi = SayHi; // Hello, my friend, Fred

user2.SayHi();

//Также имеется сокращённая запись задавания функции
// Снизу представлен более длинный вариант
let user3 = {
    name: "Bill",
    SayHi: function(){
        alert(`Hi, my boy ${user3.name}!`);
    }
}

user3.SayHi() //Hi, my boy Bill!
//Это же более короткий

let user4 = {
    name: "Gosling",
    SayHi(){
        alert(`I love you, ${user4.name}`);
    }
}

user4.SayHi() // I love you, Gosling