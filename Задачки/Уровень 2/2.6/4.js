"Дан некоторый массив с числами, например, вот такой:"
"[1, 2, 3, 4, 5, 6]"
"Слейте пары элементов вместе:"
"[12, 34, 56]"



function mergePairs(array){
    let newArray = [];
    for(let i = 0; i < array.length; i+=2){
        newArray.push(String(array[i]) + String(array[i + 1]))
    }
    return newArray;
}

console.log(mergePairs([1, 2, 3, 4, 5, 6, 7, 8]));