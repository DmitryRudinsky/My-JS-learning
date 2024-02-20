"Дан некоторый массив, например, вот такой:"
"[1, 2, 3, 4, 5, 6]"
"Найдите сумму первой половины элементов этого массива."

function halfSum(array){
    return array.slice(0, Math.floor(array.length / 2)).reduce((a, b) => a + b, 0);
}

console.log(halfSum([1, 2, 3, 4, 5, 6, 7, 8])); //1 + 2 + 3 + 4 == 10
