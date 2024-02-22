"Дано некоторое число:"
"1357"
"Проверьте, что все цифры этого числа являются нечетными."

function checkOdd(n){
    while(n){
        if((n % 10) % 2 == 0) return false;
        n = Math.floor(n / 10);
    }
    return true;
}

console.log(checkOdd(13857)); //false
console.log(checkOdd(1357)); //true