"Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке."

function mixArray(array){
    for(let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
}

console.log(mixArray([1, 2, 3, 4, 5])); //[ 2, 4, 5, 1, 3 ]