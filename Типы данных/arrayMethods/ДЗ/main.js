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

