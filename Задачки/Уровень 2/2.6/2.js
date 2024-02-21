"Дан массив с некоторыми числами, например, вот такой:"
"[123, 456, 789]"
"Напишите код, который перевернет числа в этом массиве по следующему принципу:"
"[321, 654, 987]"
let start1 = new Date().getTime();
function reverseArray1(array){
    let newArray = [];
    for(let elem of array){
        newArray.push(String(elem).split("").reverse().join(""));
    }
    return newArray;
}

console.log(reverseArray1([123, 456, 789]));

let end1 = new Date().getTime();
 
let time1 = end1 - start1;
 
console.log('Время выполнения 1-й функции = ' + time1);

let start2 = new Date().getTime();

function reverseArray2(array){
    return array.map(elem => String(elem).split("").reverse().join(""));
}

console.log(reverseArray2([123, 456, 789]));



let end2 = new Date().getTime();
 
let time2 = end2 - start2;

console.log('Время выполнения 3-й функции = ' + time2);