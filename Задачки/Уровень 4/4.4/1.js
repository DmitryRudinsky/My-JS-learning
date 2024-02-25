"Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет."

function isPrime(n){
    for(let i = 2; i < Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0) return false;
    }
    return true;
}

console.log(isPrime(97)); //true
console.log(isPrime(20)); //false