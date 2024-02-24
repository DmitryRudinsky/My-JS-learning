"Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль."

let a = [1, 2, 30, 4, 5, 15, 20, 345, 900, 32, 14, 760, 555, 1000, 43, 556, 76, 80];

function delFromArrayIf(array){
    array = array.map(a => String(a));
    for(let i = 0; i < array.length; i++){
        if(!array[i].includes("0")) array[i] = "";
    }
    return array.filter(a => a != "").map(a => Number(a));
}

console.log(delFromArrayIf(a));