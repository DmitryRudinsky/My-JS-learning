"Дано число. Выведите в консоль количество четных цифр в этом числе."

function evenCount1(n){
    let cnt = 0;
    while(n){
        if((n % 10) % 2 == 0) cnt++;
        n = Math.floor(n / 10);
    }
    return cnt;
}

function evenCount2(n){
    let str = String(n), cnt = 0;
    for(let elem of str){
        if(Number(elem) % 2 == 0) cnt++;
    }
    return cnt;
}

console.log(evenCount1(135246135268)); //6
console.log(evenCount2(135246135268)); //6