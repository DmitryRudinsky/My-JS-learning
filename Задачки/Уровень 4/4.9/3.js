"Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве."

function maxSubArr(array){
    let mx = [];
    for(let elem of array){
        mx.push(Math.max(...elem));
    }
    return mx;
}

console.log(maxSubArr([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 1000, 100]])); //[ 3, 6, 9, 1000 ]