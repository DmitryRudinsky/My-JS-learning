"Дан массив с числами. Найдите сумму квадратов элементов этого массива."

let array = [1, 2, 3, 4, 5];

let sm = 0;
for(let elem of array){
    sm += elem * elem;
}

console.log(sm);