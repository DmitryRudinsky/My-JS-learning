"Заполните массив четными числами из промежутка от 1 до 100."

let array = [];
for(let i = 1; i < 101; i++){
    if(i % 2 == 0) array.push(i);
}

console.log(array);