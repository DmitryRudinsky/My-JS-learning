"Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная."

for(let i = 10; i < 1001; i++){
    if(Number(String(i)[0]) % 2 == 0) console.log(i);
}