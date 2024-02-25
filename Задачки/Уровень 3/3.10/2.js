"Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа."



function checkDiv(array, num){
    for(let i = 0; i < array.length; i++){
        if(num % array[i] != 0){
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

console.log(checkDiv([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15], 24)); //[1, 2, 3, 4, 6, 8, 12]