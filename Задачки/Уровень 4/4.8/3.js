"Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка."

function isPower(n){
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

function isPowerArray(start, end){
    let newArr = [];
    for(let i = start; i < end + 1; i++){
        if(isPower(i)) newArr.push(i);
    }
    return newArr;
}

console.log(isPowerArray(1, 100));
/*
[
   1,  2,  3,  5,  7, 11, 13, 17,
  19, 23, 29, 31, 37, 41, 43, 47,
  53, 59, 61, 67, 71, 73, 79, 83,
  89, 97
]
*/