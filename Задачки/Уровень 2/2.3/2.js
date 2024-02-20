"Дана некоторая строка. Найдите позицию третьего нуля в строке."

function PositionOfThirdZero1(string){
    cnt = 0;
    for(let i = 0; i < string.length; i++){
        if (string[i] == "0") cnt++;
        if(cnt == 3){
            return i;
        }
    }
    if(cnt < 3) return "В строке меньше трёх нулей"
}

console.log(PositionOfThirdZero1("01234507801011")); //9
console.log(PositionOfThirdZero1("012345078111")); //В строке меньше трёх нулей


