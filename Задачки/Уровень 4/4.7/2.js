"Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов."

function sameElemOfArrays(arr1, arr2){
    return arr1.filter(elem => arr2.includes(elem));
}

console.log(sameElemOfArrays([1, 2, 432, 4325, 643, 3], [4325643, 54321214, 5, 1, 5432, 2, 3])); //[ 1, 2, 3 ]