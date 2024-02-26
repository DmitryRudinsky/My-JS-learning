"Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число."

function secondMax(array){
    return array.sort((a, b) => a - b)[array.length - 2];
}

console.log(secondMax([1, 2, 6, 4, 5, 10, 3, 8, 9])); //9