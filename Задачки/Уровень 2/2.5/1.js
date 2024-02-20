"Дана некоторая строка, например, вот такая:"
"'023m0df0dfg0'"
"Получите массив позиций всех нулей в этой в строке."

let str = "023m0df0dfg0";

function indexesOfZeros1(string){
    let array = [];
    for (let i = 0; i < string.length; i++){
        if (string[i] == "0"){
            array.push(i);
        }
    }
    return array;
}



console.log(indexesOfZeros1(str));
