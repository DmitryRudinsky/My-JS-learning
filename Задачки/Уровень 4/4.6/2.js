"Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов."

function getStrToUpper(string){
    return string.replace(/[.,!@#$%^&*();:]/g, "").split(" ").map(elem => elem[0].toUpperCase()).join("");
}

console.log(getStrToUpper("Fuck it, I love you")); //FIILY
console.log(getStrToUpper("Hello, ugly yunknee!")); //HUY