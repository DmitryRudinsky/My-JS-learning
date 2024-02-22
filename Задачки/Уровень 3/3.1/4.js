"Даны два массива:"
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
"Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми."

if(arr1.length > arr2.length){
    arr1 = arr1.splice(0, arr2.length);
}else{
    arr2 = arr2.splice(0, arr1.length);
}

console.log(arr1, arr2);