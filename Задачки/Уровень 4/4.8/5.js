"Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так,"
"чтобы в массиве не было подряд двух одинаковых чисел."

function newArrOfRandom(n, start, end){
    let newArr = [];
    while(newArr.length != n){
        let num = Math.floor(Math.random() * (end + 1 - start) + start);
        if(num != newArr[newArr.length - 1]){
            newArr.push(num);
        }
    }
    return newArr;
}

console.log(newArrOfRandom(10, 10, 13)); //[ 12, 10, 12, 11, 10, 11, 13, 10, 12, 10]

