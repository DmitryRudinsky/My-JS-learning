"123789"
"Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:"
"28"

function delOdd(num){
    num = String(num).split("");
    for(let i = 0; i < num.length; i++){
        if (num[i] % 2 != 0) num[i] = "";
    }
    return num.join("");
    
}

console.log(delOdd(123789));