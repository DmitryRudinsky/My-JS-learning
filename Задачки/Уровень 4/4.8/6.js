"Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись."

function randomNoDoubles(n, start, end){
    let newArr = new Set();
    while(newArr.size != n){
        newArr.add(Math.floor(Math.random() * (end - start + 1) - start));
    }
    return [...newArr];
}

console.log(randomNoDoubles(10, 1, 15)); //[8, 4, -1, 3, 10, 0, 5, 13, 7, 11]