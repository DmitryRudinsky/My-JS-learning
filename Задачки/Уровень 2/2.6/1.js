"Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки."

function digitPosition(string){
    let array = [];
    for(let i = 0; i < string.length; i++){
        if(!isNaN(Number(string[i])) && typeof Number(string[i]) == "number") array.push(i);
    }
    return array
}

console.log(digitPosition("fghjk123fghjcn456"));