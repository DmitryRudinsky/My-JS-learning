// 1 задание

let a = +prompt("First num", "");
let b = +prompt("Second num", "");

if (isFinite(a) && isFinite(b)){
    alert(a + b);
} else{
    alert("Ты дурак?")
}

// g

let f = 0;

function readNumber() {
    let num;
    do{
        num = prompt("Введите число", 0);
    } while(!isFinite(num));

    if (num == null || num == '') return null;
    return +num;
}

alert(readNumber())

// 3 задание


function random(min, max) {
    return min + Math.random() * (max - min);
}
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );


// 4 задание


function randomInteger(min, max){
    return land = Math.round(min + Math.random() * (max - min));
}

alert(randomInteger(1, 101))
