"Заполните массив случайными числами из промежутка от 1 до 100."

let array = []
for(let i = 0; i < 101; i++){
    array.push(Math.round(Math.random() * 100));
}

console.log(array);