"Дано некоторое число:"
"12345"
"Переверните его:"
"54321"

let num = 12345;
let res = 0;
while(num){
    res = res * 10 + num % 10;
    num = Math.floor(num / 10);
}
console.log(res);

