"Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей."

function sumOfDivs(n){
    let arr = [];
    for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0){
            arr.push(i);
            if(n / i != i){
                arr.push(n / i);
            }
        }
    }
    return arr.reduce((a, b) => a + b, 0);
}

console.log(sumOfDivs(27));