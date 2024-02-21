"Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем."

function toKnowCase(char){
    if (char == char.toUpperCase()) return "В верхнем регистре";
    else return "В нижнем регистре;"
}

console.log(toKnowCase("A")); //В верхнем регистре
console.log(toKnowCase("a")); //В нижнем регистре;