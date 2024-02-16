"Дано некоторое число:"
"12345"
"Выведите в консоль все его символы с конца."

//1 способ
let start = new Date().getTime();
let num = 12345;
let str = String(num);
for(let i = str.length - 1; i >= 0; i--){
    console.log(str[i])
}
let end = new Date().getTime();
let time = end - start; 
console.log('Время выполнения = ' + time);


console.log();
//2 способ
let start1 = new Date().getTime();
num = 12345;
while(num){
    console.log(num % 10);
    num = Math.floor(num / 10);
}
let end1 = new Date().getTime();
let time1 = end1 - start1; 
console.log('Время выполнения = ' + time1);