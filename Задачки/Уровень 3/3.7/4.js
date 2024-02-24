"Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы."

function checkDiv(n){
    let i = 2, arr = [];
    while(i * i <= n){
        if(n % i == 0){
            arr.push(i);
            if(n / i != i) arr.push(n / i);
        }
        i++;
    }
    return arr.length > 0;
}

console.log(checkDiv(45));