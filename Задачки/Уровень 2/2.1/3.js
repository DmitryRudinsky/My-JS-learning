"Дан массив. Удалите из него элементы с заданным значением.";

function delFromArray1(array, n){
    if(array.indexOf(n) == -1) return "Такого значения в массиве нет.";
    for(let i = 0; i < array.length; i++){
        if(array[i] == n){
            array = array.slice(0, i).concat(array.slice(i + 1));
            i--;
        }
    }
    return array;
}

function delFromArray2(array, n){
    if(array.indexOf(n) == -1) return "Такого значения в массиве нет.";
    while(array.indexOf(n) != -1){
        array.splice(array.indexOf(n), 1);
    }
    return array;
}


console.log(delFromArray1([1, 4, 4, 4, 2, 3, 4, 5, 4, 4, 4, 7, 4, 2, 1, 4], 4)); //[1, 2, 3, 5, 7, 2, 1]
console.log(delFromArray2([1, 4, 4, 4, 2, 3, 4, 5, 4, 4, 4, 7, 4, 2, 1, 4], 4)); //[1, 2, 3, 5, 7, 2, 1]