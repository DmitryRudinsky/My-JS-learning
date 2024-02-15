"Дан массив с числами. Увеличьте каждое число из массива на 10 процентов."

let array = [10, 100, 1000, 10000, 100000];

for(let i  = 0; i < array.length; i++){
    array[i] = Math.round(array[i] * 1.1);
}

console.log(array);