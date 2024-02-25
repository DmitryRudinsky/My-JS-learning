"Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней."

function findThree(num){
    num = String(num).split("");
    let arr = [];
    for(let i = 0; i < num.length; i++){
        if(num[i] == "3") arr.push(i);
    }
    return arr.slice(1, arr.length - 1);
}

console.log(findThree(2313133233343));