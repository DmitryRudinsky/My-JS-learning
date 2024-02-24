"Найдите все числа от 1 до 1000, сумма цифр которых равна 13."

function sumOfNumbers(num){
    return String(num).split("").map(a => Number(a)).reduce((a, b) => a + b, 0);
}

let arr = [];
for(let i = 1; i < 1001; i++){
    if(sumOfNumbers(i) == 13) arr.push(i);
}
console.log(arr);