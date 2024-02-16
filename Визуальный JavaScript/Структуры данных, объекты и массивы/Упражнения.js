"1 упражнение"

function sum(args){
    let res = 0;
    for(let elem of args){
        res += elem;
    }
    return res;
}

function range(start, end, step = start < end ? 1 : -1){
    let array = [];
    if(step > 0){
        for (let i = start; i <= end; i += step) array.push(i);
    }else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

console.log(sum(range(1, 10))); //5
console.log(sum(range(5, 2, -1)));


"2 упражнение"

array = [1, 2, 3, 4, 5];
function reverseArray(array){
    let newArray = [];
    for(let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

let newArray = reverseArray(array);
console.log(newArray);

function reverseArrayInPlace(array){
    for(let i = 0; i < Math.floor(array.length / 2); i++){
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArrayInPlace(newArray));


"3 задание"

function arrayToList(array){
    let list = null;
    for(let i = array.length - 1; i >= 0; i--){
        list = {value: array[i], rest: list};
    }
    return list;
}

let newList = (arrayToList([1, 2, 3])); //{ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
console.log(newList);

//1  версия listToArray
function listToArray(list){
    let array = [];
    while(list){
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

// 2 версия listToArray

function listToArray2(list){
    let array = [];
    for(let node = list; node; node = node.rest){
        array.push(node.value);
    }
    return array;
}

console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } })); //[ 1, 2, 3 ]
console.log(listToArray(arrayToList([10, 20, 30]))); //[ 10, 20, 30 ]
console.log(listToArray2(arrayToList([10, 20, 30]))); //[ 10, 20, 30 ]

function prepend(elem, list){
    return newList = {
        value: elem,
        rest: list
    };
}

console.log(prepend(10, prepend(20, null))); //{ value: 10, rest: { value: 20, rest: null } }

function nth(list, indx){
    if(!list) return undefined;
    else if(indx == 0) return list.value;
    else return nth(list.rest, indx - 1);
}

console.log(nth(arrayToList([10, 20, 30]), 1)); //20


"4 задание"
let object1 = {here: {is: "an"}, object: 2};
let object2 = {here: {is: "an"}, object: 2,};


function deepEqual(obj1, obj2){
    if(obj1 === obj2) return true;
    if(typeof obj1 == "object" && obj1 != null && typeof obj2 == "object" && obj2 != null){
        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);
        if(keys1.length != keys2.length) return false;
        else{
            for(let key of keys1){
                if(!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
            }
            return true;
        }
    } else{
        return false;
    }
}

console.log(deepEqual(object1, object2)); //true

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); //true
console.log(deepEqual(obj, {here: 1, object: 2})); //false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); //true