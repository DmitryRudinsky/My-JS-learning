"Дана строка. Проверьте, что эта строка состоит только из четных цифр."

let checkEvenNum = str => String(str).replace(/[02468]/gi, "") == "";

console.log(checkEvenNum(20468)); //true
console.log(checkEvenNum(22808642800468)); //true
console.log(checkEvenNum(228086421800468)); //false