"Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь."

function isFloat(n){
    return String(n).replace(/[0123456789]/g, "") == "."; 
}

console.log(isFloat(1.5)); //true
console.log(isFloat(5)); //false