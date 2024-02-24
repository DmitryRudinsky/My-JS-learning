"Дан массив со числами. Удалите из него числа, имеющие два и более нуля."

function checkZeros(num){
    return String(num).split("0").length - 1 < 2;
}

let arr = [1, 10, 23, 20, 2000, 2324042340, 4321300, 10101134001, 342, 543, 100]; //1, 10, 23, 20, 342, 543
for(let i = 0; i < arr.length; i++){
    if(!checkZeros(arr[i])){
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr); //1, 10, 23, 20, 342, 543