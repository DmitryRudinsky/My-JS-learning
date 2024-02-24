"Дан некоторый массив, например, вот такой:"
"[123, 456, 789]"
"Слейте все элементы этого массива в один массив, разбив их посимвольно:"
"[1, 2, 3, 4, 5, 6, 7, 8, 9]"

function concatArrays(array){
    let newArr = []
    for(let elem of array) {
        newArr = newArr.concat(String(elem).split(""));
    };
    return newArr;
}

console.log(concatArrays([123, 456, 789]));