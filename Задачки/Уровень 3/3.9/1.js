"Дана строка. Проверьте, что эта строка состоит только из цифр."

let checkNum = str => String(str).replace(/[1234567890]/gi, "") == "";

console.log(checkNum(12345)); //true
console.log(checkNum("1234c5")); //false