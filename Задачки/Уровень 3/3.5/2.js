"Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5."

function delFromArrayIf(array, n){
    for(let i = 0; i < array.length; i++){
        if(array[i] % n != 0) array[i] = "";
    }
    return array.filter(a => a != '');
}

console.log(delFromArrayIf([1, 2, 3, 4, 5, 15, 20, 345, 32, 14, 76, 555, 1000, 43, 556, 76], 5));