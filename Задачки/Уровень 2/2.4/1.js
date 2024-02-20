"Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке."

function firstPos(string){
    for(let i = 0; i < string.length; i++){
        if(!isNaN(Number(string[i])) && typeof Number(string[i]) == "number") return i;
    }
    return "В строке нет цифр";
}

console.log(firstPos("ABCDE1FG")); //5