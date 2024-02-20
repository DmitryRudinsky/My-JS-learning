"Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти."

function charSum1(n){
    let str = String(n);
    if(Number(str[0]) + Number(str[1]) == 5){
        return n;
    }
}

for(let i = 10; i < 1001; i++){
    if(charSum1(i)) console.log(i);
}