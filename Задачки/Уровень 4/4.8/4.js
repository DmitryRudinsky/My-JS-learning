"Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвщать их сумму."

function sumOfNums(...args){
    return args.reduce((a, b) => a + b);
}

console.log(sumOfNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //55
