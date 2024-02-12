"1 задание - Минимум."

function min(a, b){
    if (a <= b) return a;
    else return b;
}

console.log(min(100, -100)) //-100
console.log(min(0, 1)) //0
console.log(min(5, 4)) //4
console.log(min(1000, 0.24)) //0.24

"2 задание - Рекурсия"

function isEven(n){
    if(n == 0) return true;
    else if(n == 1) return false;
    else if(n < 0) return isEven(-n);
    else return isEven(n - 2);
}

console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false


"3 задание - Подсчёт букв."

function countBs(str){
    let cntB = 0;
    for(let i = 0; i < str.length; i++){
        if (str[i] == "B") cntB += 1;
    }
    return cntB;
}

console.log(countBs("BBC")); //2
console.log(countBs("BBADFGHJKL:BTFGDHJIKOWHBFGHJDKWOIUGBEGDYHIJOK")); //5


function countChar(str, char){
    let cntChr = 0;
    for(let i = 0; i < str.length; i++){
        if (str[i] == char) cntChr += 1;
    }
    return cntChr;
}

console.log(countChar("kakkerlak", "k")); //4
console.log(countChar("ffqw3e4r5t6y7u8iffzxcvbnm,kjhtresxcvbnjhytrewfdf", "f")); //6