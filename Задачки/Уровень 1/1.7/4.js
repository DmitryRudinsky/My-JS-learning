"Дано некоторое число:"
"12345"
"Найдите сумму цифр этого числа."

let num = 12345;
let res = 0;


//1 способ
let strNum = String(num);
for(let elem of strNum){
    res += Number(elem);
}
console.log(res);


//2 способ
res = 0;
while(num){
    res += num % 10;
    num = Math.floor(num / 10);
}
console.log(res);