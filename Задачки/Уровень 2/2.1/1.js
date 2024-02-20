"Дана некоторая строка. Найдите позицию первого нуля в строке."

let s = "112345432034254310" //9
console.log(s.indexOf("0")); //9

let cnt = -1;
for(let elem of s){
    cnt++;
    if (elem == "0"){
        console.log(cnt); //9
        break;
    }
}