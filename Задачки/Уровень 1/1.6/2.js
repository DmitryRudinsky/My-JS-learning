"Дан массив с числами. Найдите сумму квадратных корней элементов этого массива."

let array = [4, 9, 16, 25, 36]; //2 + 3 + 4 + 5 + 6 == 20
let sm = 0;
for(let elem of array){
    sm += Math.sqrt(elem);
}

console.log(sm);

