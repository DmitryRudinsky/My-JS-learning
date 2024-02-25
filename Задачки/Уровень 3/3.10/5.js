"Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите."

let arr = [11111, 2222222, 2134324, 33333, 432165768, 65431444444, 444444, 5555555, 654321, 666];

function checkEqual(num){
    return (Number(String(num).split("").sort((a, b) => a - b).join(""))) == num;
}

for(let i = 0; i < arr.length; i++){
    if(checkEqual(arr[i])){
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr); //[ 2134324, 432165768, 65431444444, 654321 ]