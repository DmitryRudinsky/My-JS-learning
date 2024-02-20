"Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве."

function cntNegative(array){
    return array.filter((a) => a < 0).length;
}

console.log(cntNegative([1, -1, 2, -2, 3, -3, 4, -4, 5, -5, -6, -7, -8, -9, -10, 11]));