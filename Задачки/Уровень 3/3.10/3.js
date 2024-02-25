"Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе."

let num1 = 46534656516562;
let num2 = 789213782812937;

function arrayOfGeneral(n1, n2){
    n1 = String(n1).split("");
    n2 = String(n2).split("");
    let res = [];
    for(let elem of n1){
        if(n2.includes(elem) && !res.includes(elem)) res.push(elem);
    }
    return res.map(a => Number(a)).sort((a, b) => a - b);
}

console.log(arrayOfGeneral(num1, num2));