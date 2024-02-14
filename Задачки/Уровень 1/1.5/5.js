"Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки."

let s = "ABCDEFGHIJKLMNOPQRSTQVWXYZ";
for(let i = 1; i <= s.length; i++){
    console.log(s[s.length - i]);
}