"Дан некоторый массив, например, вот такой:"
"[1, 2, 3, 4, 5, 6]"
"Поменяйте местами пары элементов этого массива:"
"[2, 1, 4, 3, 6, 5]"

function swap(array){
    for(let i = 0; i < array.length; i += 2){
        let first = array[i];
        array[i] = array[i + 1];
        array[i + 1] = first;
    }
    return array;
}

console.log(swap([1, 2, 3, 4, 5, 6])); //[ 2, 1, 4, 3, 6, 5 ]