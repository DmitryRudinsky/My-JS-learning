"Даны два числа. Получите массив общих делителей этих чисел."

function getDiv(num){
    let i = 0, newSet = new Set();
    while(i * i <= num){
        if(num % i == 0){
            newSet.add(i);
            if(num / i != i) newSet.add(num / i);
        }
        i++;
    }
    return newSet;
}

function ArrayOfGCD(set1, set2){
    let res = [];
    for(let elem of set1){
        if(set2.has(elem)) res.push(elem);
    }
    return res.sort((a, b) => a - b);
} 

console.log(ArrayOfGCD(getDiv(54), getDiv(36)));

