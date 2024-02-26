"Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива."

function randomElemsOfArray(arr, n){
    let newArr = [];
    for(let i = 0; i < n; i++){
        newArr.push(arr[Math.floor(Math.random() * arr.length)]);
    }
    return newArr;
}

console.log(randomElemsOfArray([11, 2134325, 54331, 136532126436, 75645321, 45, 54464353, 6431524576, 54314627], 5)); //[ 136532126436, 54314627, 45, 75645321, 45 ]