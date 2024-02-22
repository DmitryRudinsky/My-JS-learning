"Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию."

function checkIncrease(num){
    num = String(num);
    for(let i = 0; i < num.length; i++){
        if(num[i] > num[i + 1]) return false;
    }
    return true;
}

console.log(checkIncrease(123456)); //true
console.log(checkIncrease(1234565)); //false