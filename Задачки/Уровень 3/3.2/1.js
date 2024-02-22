"Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная."

function checkEven(n){
    return Number(String(n)[String(n).length - 2]) % 2 == 0;
}

for(let i = 10; i < 1001; i++){
    if(checkEven(i)){
        console.log(i);
    }
}