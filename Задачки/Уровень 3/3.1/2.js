"Дан массив:"
[1, '', 2, 3, '', 5]
"Удалите из массива все пустые строки."

function del(array){
    return array.filter((a) => a != '');
}

console.log(del([1, '', 2, 3, '', 5]));