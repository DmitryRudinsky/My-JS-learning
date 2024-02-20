"Дан некоторый массив, например, вот такой:"
"[1, 2, 3, 4, 5, 6]"
"Поделите сумму первой половины элементов этого массива на сумму второй половины элементов."

function divisionOfHalves(array){
    let firstHalfSum = array.slice(0, (array.length / 2)).reduce((a, b) => a + b, 0);
    let secondHalfSum = array.slice(array.length / 2).reduce((a, b) => a + b, 0);
    return firstHalfSum / secondHalfSum;
}

console.log(divisionOfHalves([1, 2, 3, 4, 5, 6]));