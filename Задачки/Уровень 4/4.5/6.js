"Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи."

function fib1(n){
    if(n <= 1) return n;
    else return fib1(n - 1) + fib1(n - 2);
}


function fib2(n){
    return n <= 1 ? n : fib2(n - 1) + fib2(n - 2);
}

console.log(fib1(10));//55
console.log(fib2(10));//55