"Дан массив с числами. Оставьте в нем только положительные числа."

function arrayPositive1(array){
    return array.filter(a => a > 0);
}

function arrayPositive2(array){
    for(let indx = 0; indx < array.length; indx++){
        if(array[indx] < 0){
            array.splice(indx, 1);
            indx--;
        }
    }
    return array;
}




let array1 = [1, 2, 3, -4, -5, 6, -7];
arrayPositive1(array1);
console.log(array1); // [1, 2, 3, -4, -5, 6, -7]
console.log(arrayPositive1(array1)); //[ 1, 2, 3, 6 ]
"В данном примере мы создаём новый массив."

let array2 = [1, 2, 3, -4, -5, 6, -7];
arrayPositive2(array2);
console.log(array2); //[ 1, 2, 3, 6 ]
console.log(arrayPositive2([1, 2, 3, -4, -5, 6, -7])); //[ 1, 2, 3, 6 ]
"А в этом примере мы изменяем исходный массив."


