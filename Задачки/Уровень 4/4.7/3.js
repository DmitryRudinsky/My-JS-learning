"Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:"
/*
let arr = [1, 2, 3, 4, 5];

func(arr, 1); // 2
func(arr, 4); // 5
func(arr, 5); // 1
*/

function nextElem(arr, elem){
    if (arr.indexOf(elem) == arr.length - 1) console.log(arr[0]);
    else console.log(arr[arr.indexOf(elem) + 1])
}

let arr1 = [1, 2, 3, 4, 5];
nextElem(arr1, 1); // 2
nextElem(arr1, 4); // 5
nextElem(arr1, 5); // 1
console.log();
let arr2 = [5, 3, 2, 4, 1];
nextElem(arr2, 1); // 5
nextElem(arr2, 4); // 1
nextElem(arr2, 5); // 3