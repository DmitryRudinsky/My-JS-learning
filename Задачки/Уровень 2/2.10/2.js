"Дано число. Получите первую четную цифру с конца этого числа."

function firstEvenFromAnd(num){
    return String(num).split("").reverse().filter(a => a % 2 == 0)[0];
}

console.log(firstEvenFromAnd(12357778994677)); //6