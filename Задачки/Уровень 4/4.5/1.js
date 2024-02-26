"Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр."

function checkNum1(n){
    return n.replace(/[0123456789]/g, "") == "";
}

function checkNum2(n){
    return !isNaN(Number(n))
}

console.log(checkNum1("21r43")); //false
console.log(checkNum1("5432")); //true
console.log(checkNum1("21r43")); //false
console.log(checkNum1("5432")); //true