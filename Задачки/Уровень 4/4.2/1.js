"Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр."

function sumOfNums(n){
    let sm = 0;
    while(n){
        sm += n % 10;
        n = Math.floor(n / 10);
    }
    return sm;
}

console.log(sumOfNums(12345)); //15